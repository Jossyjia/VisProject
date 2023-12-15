<template>
    <div class="mybackground"></div>
    <div class="main">
        <div class="left">
            <div class="title">
                <p>流失文物</p>
            </div>
        </div>
        <div class="right">
            <div id="TypeGraph" class="TypeGraphChart"></div>
            <div id="TimeGraph" class="TimeGraphChart"></div>
        </div>
    </div>
</template>


<script>
export default {
    // 图表名称
    name: 'RelicsGraph',
    methods: {
        TimeGraph() {
            // 基于准备好的dom,初始化echarts实例
            const TimeGraphChart = this.$echarts.init(document.getElementById('TimeGraph'));
            // 指定图表的配置项和数据
            var option;
            const timedata = ['史前', '新石器', '商', '周', '秦', '汉', '三国', '西晋',
                '南北朝', '唐', '五代十国', '宋', '元', '明', '清'];
            const Lost = [['史前', 2460], ['新石器', 256], ['商', 598], ['周', 1728], ['秦', 309], ['汉', 2204], ['三国', 75],
                ['西晋', 54], ['南北朝', 178], ['唐', 3595], ['五代十国', 344], ['宋', 5269], ['元', 887], ['明', 4811], ['清', 15116]
            ];
            const scatterOption = (option = {
                xAxis: {
                    scale: true,
                    type: 'category',
                    data: timedata,
                },
                yAxis: {
                    scale: true,
                },
                series: [
                    {
                        type: 'scatter',
                        id: '流失文物总数',
                        dataGroupId: '流失文物总数',
                        symbolSize: function (data) {
                            return Math.sqrt(data[1]);
                        },
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(120, 36, 50, 0.5)',
                            shadowOffsetY: 5,
                            color: this.$echarts.graphic.RadialGradient(0.4, 0.3, 1, [
                                {
                                    offset: 0,
                                    color: '#EEA9A9',
                                },
                                {
                                    offset: 1,
                                    color: '#FEDFE1'
                                }
                            ])
                        },
                        universalTransition: {
                            enabled: true,
                            divideShape: 'split',
                            delay: function () {
                                return Math.random() * 400;
                            }
                        },
                        data: Lost
                    }
                ]
            });
            const barOption = {
                xAxis: {
                    type: 'category',
                    data: ['流失文物总数'],
                    barMaxWidth: 1,
                },
                yAxis: {},
                series: [
                    {
                        type: 'bar',
                        itemStyle: {
                            shadowBlur: 10,
                            shadowColor: '#FEDFE1',
                            shadowOffsetY: 5,
                            shadowOffsetX: 5,
                            color: '#FEDFE1',
                        },
                        id: 'total',
                        data: [
                            {
                                value: calculateTotal(Lost),
                                groupId: '流失文物总数'
                            }
                        ],
                        universalTransition: {
                            enabled: true,
                            divideShape: 'split',
                            seriesKey: ['流失文物总数'],
                            delay: function () {
                                return Math.random() * 400;
                            }
                        }
                    }
                ]
            };
            let currentOption = scatterOption;

            function calculateTotal(data) {
                let total = 0;
                for (let i = 0; i < data.length; i++) {
                    total += data[i][1];
                }
                return total;
            }

            setInterval(function () {
                currentOption = currentOption === scatterOption ? barOption : scatterOption;
                TimeGraphChart.setOption(currentOption, true);
            }, 2000);
            TimeGraphChart.setOption(option);
        },
        TypeGraph() {
            const TypeGraphChart = this.$echarts.init(document.getElementById('TypeGraph'));
            const option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center',
                    // doesn't perfectly work with our tricks, disable it
                    selectedMode: false
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        center: ['50%', '70%'],
                        // adjust the start angle
                        startAngle: 180,
                        label: {
                            show: true,
                            formatter(param) {
                                // correct the percentage
                                return param.name + ' (' + param.percent * 2 + '%)';
                            }
                        },
                        data: [
                            {value: 3122, name: '雕塑', itemStyle: {color: "#004da7"}},
                            {value: 12995, name: '容器', itemStyle: {color: "#88bfb8"}},
                            {value: 2447, name: '绘画', itemStyle: {color: "#30517b"}},
                            {value: 932, name: '珠宝', itemStyle: {color: "#6ca8af"}},
                            {value: 21688, name: '货币', itemStyle: {color: "#a2d2e2"}},
                            {value: 1534, name: '服装', itemStyle: {color: "#f7ca75"}},
                            {value: 550, name: '武器', itemStyle: {color: "#899881"}},
                            {value: 258, name: '乐器', itemStyle: {color: "#356c9d"}},
                            {
                                value: 3122 + 12995 + 2447 + 932 + 21688 + 1534 + 550 + 258,
                                itemStyle: {color: 'none', decal: {symbol: 'none'}},
                                label: {show: false}
                            }
                        ]
                    }
                ]
            };
            TypeGraphChart.setOption(option);
        }
    },
    mounted() {
        this.TimeGraph();
        this.TypeGraph()
    }
}
</script>

<style scoped>
@import '../assets/css/font.css';


/*标题样式*/
.title {
    /*字体样式*/
    font-family: XingKai, serif;
    /*字体粗细*/
    font-weight: 40;
    /*字体大小*/
    font-size: 100px;
    color: rgba(10, 46, 227, 0.6);
    flex: 1;
    width: 1000px;
    margin-top: -200px;
    margin-left: 100vh;
    z-index: 1;
}

/*图表样式*/
.TypeGraphChart {
    /*图表宽度高度 用来设定图表展示出来的大小 一定要设置*/
    width: 1200px;
    height: 500px;
    background-size: cover;
    margin-left: 350px;
    margin-top: 200px;
    align-items: center;
}

.TimeGraphChart {
    /*图表宽度高度 用来设定图表展示出来的大小 一定要设置*/
    width: 900px;
    height: 600px;
    background-size: cover;
    margin-left: 500px;
    margin-top: -150px;
    margin-bottom: 150px;
    align-items: center;
}


.main {
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    left: 1000px;
    top: 0;
    align-items: center;
}


.left {
    z-index: 10;
    width: 100vh;
}

.right {
    width: 100vh;
    z-index: 10;
}


/*背景图设置*/
.mybackground {
    z-index: -1;
    position: relative;
    background-image: url("../assets/data/bg2.png");
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
}

</style>