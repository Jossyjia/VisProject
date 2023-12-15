DesignPage.vue
<template>
    <div class="mybackground"></div>
    <div class="main">
        <div id="RebuildGraph" class="RebuildGraphChart"></div>
        <div class="title">
            <h1>重修数据</h1>
        </div>
    </div>
</template>


<script>
export default {
    // 图表名称
    name: 'RebuildGraph',
    methods: {
        myEcharts() {
            const RebuildGraphChart = this.$echarts.init(document.getElementById('RebuildGraph'));
            var option;
            const names = ['北魏', '西魏', '北周', '隋', '初唐', '盛唐', '中唐吐蕃', '晚唐', '五代', '宋', '沙洲回鹘', '西夏', '蒙古/元', '清'];
            option = {
                title: {text: '开放参观的莫高窟各洞窟开凿与重修年代表'},
                color: ['#356c9d', '#206864', '#5da39d', '#a2d2e2'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['开凿', '第一次重修', '第二次重修', '第三次重修']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['9', '12', '16', '17', '23', '25', '29', '44', '46', '61', '66', '71', '79', '96',
                            '100', '103', '130', '138', '146', '148', '152', '171', '201', '202', '203', '204',
                            '205', '209', '237', '244', '246', '249', '251', '257', '259', '290', '292', '296',
                            '311', '314', '323', '328', '329', '331', '332', '334', '335', '340', '384', '386',
                            '390', '397', '401', '407', '409', '419', '420', '428', '445'
                        ]
                    }
                ],
                yAxis: [
                    {
                        type: 'category',
                        axisLabel: {
                            margin: 30,
                            fontSize: 16
                        },
                        inverse: false,
                        data: names
                    }
                ],
                series: [
                    {
                        name: '开凿',
                        type: 'line',

                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: ['晚唐', '晚唐', '晚唐', '晚唐', '盛唐', '宋', '晚唐', '盛唐', '盛唐', '五代', '盛唐',
                            '初唐', '盛唐', '初唐', '五代', '盛唐', '盛唐', '晚唐', '五代', '盛唐', '宋', '盛唐',
                            '中唐吐蕃', '初唐', '初唐', '初唐', '初唐', '初唐', '中唐吐蕃', '隋', '西魏', '西魏',
                            '北魏', '北魏', '北魏', '北周', '隋', '北周', '隋', '隋', '盛唐', '初唐', '初唐', '初唐',
                            '初唐', '初唐', '初唐', '初唐', '盛唐', '初唐', '隋', '隋', '隋', '隋', '沙洲回鹘', '隋',
                            '隋', '北周', '盛唐'
                        ]
                    },
                    {
                        name: '第一次重修',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: ['宋', '五代', '清', '晚唐', '中唐吐蕃', '西夏', '清', '中唐吐蕃', '五代', '蒙古/元',
                            '盛唐', '初唐', '五代', '清', '清', '清', '西夏', '五代', '宋', '晚唐', '西夏', '宋',
                            '宋', '宋', '宋', '五代', '盛唐', '五代', '沙洲回鹘', '五代', '西夏', '清', '五代',
                            '宋', '宋', '宋', '初唐', '五代', '五代', '西夏', '西夏', '五代', '五代', '五代', '五代',
                            '五代', '中唐吐蕃', '中唐吐蕃', '中唐吐蕃', '中唐吐蕃', '五代', '五代', '五代', '宋', '清',
                            '西夏', '西夏', '五代', '五代'
                        ]
                    },
                    {
                        name: '第二次重修',
                        type: 'line',
                        stack: 'Total',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: ['蒙古/元', '清', '清', '晚唐', '五代', '清', '清', '五代', '宋', '蒙古/元', '盛唐',
                            '初唐', '五代', '清', '清', '清', '西夏', '蒙古/元', '蒙古/元', '沙洲回鹘', '清', '清',
                            '宋', '清', '宋', '宋', '中唐吐蕃', '清', '清', '沙洲回鹘', '西夏', '清', '清', '宋',
                            '宋', '宋', '盛唐', '清', '清', '清', '清', '西夏', '清', '清', '蒙古/元', '清', '宋',
                            '晚唐', '五代', '五代', '清', '清', '清', '清', '清', '西夏', '西夏', '五代', '西夏'
                        ]
                    },
                    {
                        name: '第三次重修',
                        type: 'line',

                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: ['清', '清', '清', '晚唐', '清', '清', '清', '五代', '宋', '蒙古/元', '盛唐', '初唐',
                            '五代', '清', '清', '清', '西夏', '清', '清', '清', '清', '清', '宋', '清', '宋', '清',
                            '五代', '清', '清', '沙洲回鹘', '西夏', '清', '清', '宋', '宋', '宋', '五代', '清', '清',
                            '清', '清', '西夏', '清', '清', '清', '清', '蒙古/元', '蒙古/元', '清', '清', '清', '清',
                            '清', '清', '清', '西夏', '西夏', '五代', '西夏'
                        ]
                    }
                ]
            };
            RebuildGraphChart.setOption(option);
        }
    },
    mounted() {
        this.myEcharts();
    }
}
</script>

<!--scoped保证样式只影响当前页面-->
<style scoped>
/*特殊字体样式*/
/*导入自定义字体*/
@import '../assets/css/font.css';


/*图表样式*/
.RebuildGraphChart {
    /*图表宽度高度 用来设定图表展示出来的大小 一定要设置*/
    width: 1600px;
    height: 600px;
    background-size: cover;
    margin-left: 450px;
    margin-top: 50px;
    margin-right: 0;
    /*margin-right: -10%;*/
    /*flex: 1;*/
    /*align-items: center;*/
}

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
    margin-top: 500px;
    margin-left: -1300px;
    z-index: 1;
}



.main {
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 3000px;
    height: 100vh;
    left: 3000px;
    top: 0;
    /*align-items: center;*/
}

/*背景图设置*/
.mybackground {
    z-index: -1;
    position: relative;
    background-image: url("../assets/data/bg3.png");
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
}

</style>