DesignPage.vue
<template>
    <div class="mybackground"></div>
    <div class="main">
        <div id="NMGraph" class="NMGraphChart"></div>
        <div class="title">
            <h1>国博</h1><br>
            <h1>数据</h1>
        </div>
    </div>
</template>


<script>
export default {
    // 图表名称
    name: 'NMGraph',
    methods: {
        myEcharts() {
            const NMGraphChart = this.$echarts.init(document.getElementById('NMGraph'));

            const hours = ['夏、商、周', '春秋、战国', '秦、汉、三国', '魏晋南北朝', '隋、唐', '宋、辽、金', '元', '明', '清', '近代', '现当代'];
            const days = ['丧葬用品', '书画', '交通工具', '兵器武器', '医疗卫生', '印章', '宗教用品', '建筑构件', '文体娱乐', '文献', '旗帜牌匾', '机械仪器', '模型', '民族民俗', '照片底片', '生产工具', '生活用品', '祭器礼器', '证件票据', '证章符号', '货币', '邮品'];
            const data = [[0, 0, 2], [0, 2, 3], [0, 3, 7], [0, 5, 22], [0, 6, 1], [0, 7, 1], [0, 9, 6], [0, 13, 3], [0, 15, 9], [0, 16, 130], [0, 17, 36], [0, 20, 13], [1, 2, 3], [1, 3, 16], [1, 5, 13], [1, 7, 3], [1, 8, 7], [1, 11, 3], [1, 13, 3], [1, 15, 7], [1, 16, 102], [1, 17, 14], [1, 19, 1], [1, 20, 58], [2, 0, 53], [2, 2, 2], [2, 3, 11], [2, 4, 3], [2, 5, 8], [2, 6, 1], [2, 7, 9], [2, 8, 3], [2, 9, 7], [2, 11, 8], [2, 12, 12], [2, 13, 31], [2, 15, 6], [2, 16, 97], [2, 19, 2], [2, 20, 30], [3, 0, 21], [3, 2, 1], [3, 3, 1], [3, 5, 2], [3, 6, 6], [3, 7, 6], [3, 8, 1], [3, 9, 1], [3, 11, 1], [3, 12, 1], [3, 13, 7], [3, 15, 1], [3, 16, 23], [3, 20, 39], [4, 0, 54], [4, 1, 2], [4, 4, 3], [4, 6, 17], [4, 7, 18], [4, 8, 2], [4, 9, 10], [4, 11, 2], [4, 12, 2], [4, 15, 4], [4, 16, 98], [4, 18, 3], [4, 20, 12], [5, 1, 1], [5, 3, 1], [5, 4, 3], [5, 5, 2], [5, 6, 1], [5, 7, 9], [5, 9, 15], [5, 11, 2], [5, 13, 23], [5, 15, 11], [5, 16, 63], [5, 17, 2], [5, 19, 2], [5, 20, 145], [6, 0, 2], [6, 1, 4], [6, 5, 2], [6, 7, 2], [6, 8, 1], [6, 9, 6], [6, 11, 6], [6, 15, 1], [6, 16, 25], [6, 20, 20], [7, 1, 20], [7, 3, 3], [7, 4, 1], [7, 6, 6], [7, 7, 2], [7, 9, 44], [7, 11, 2], [7, 12, 1], [7, 16, 171], [7, 18, 4], [7, 19, 3], [7, 20, 27], [8, 1, 69], [8, 3, 5], [8, 5, 4], [8, 6, 7], [8, 8, 1], [8, 9, 131], [8, 10, 2], [8, 11, 4], [8, 13, 20], [8, 14, 299], [8, 15, 2], [8, 16, 239], [8, 18, 2], [8, 20, 113], [8, 21, 2], [9, 1, 48], [9, 3, 5], [9, 5, 8], [9, 7, 1], [9, 9, 88], [9, 11, 2], [9, 14, 110], [9, 16, 8], [9, 18, 2], [9, 19, 4], [9, 21, 39], [10, 1, 108], [10, 2, 2], [10, 3, 19], [10, 4, 4], [10, 5, 75], [10, 6, 1], [10, 7, 4], [10, 8, 2], [10, 9, 154], [10, 10, 14], [10, 11, 11], [10, 12, 11], [10, 13, 1], [10, 14, 76], [10, 15, 5], [10, 16, 182], [10, 18, 25], [10, 19, 44], [10, 20, 3], [10, 21, 5]]
                .map(function (item) {
                    return [item[0], item[1], item[2]];
                });

            const option = {
                tooltip: {
                    position: 'top',
                },
                grid: {
                    height: '50%',
                    top: '10%'
                },
                xAxis: {
                    type: 'category',
                    data: hours,
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: days,
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    color: [
                        "#002fa7",
                        "#12264f",
                        "#206864",
                        "#3d8386",
                        "#32788a",
                        "#5da39d",
                        "#6ca8af",
                        "#88bfb8",
                        "#a4c9cc",
                        "#a2d2e2"
                    ],
                    type: 'continuous',
                    min: 0,  // 设置对数尺度的最小值，避免出现 log(0) 无穷大的情况
                    max: 299,  // 设置对数尺度的最大值
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '15%',
                    // dimension: 3,
                    // log: true,  // 开启对数尺度
                    // base: 10,   // 对数的底数，默认为10
                    // logScale: true,  // 启用对数尺度
                    // logBase: 10,     // 设置对数的底数
                    // logMin: 1        // 设置对数尺度的最小值
                },
                series: [
                    {
                        name: 'Punch Card',
                        type: 'heatmap',
                        data: data,
                        label: {
                            show: true
                        },
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            NMGraphChart.setOption(option);
        }
    },
    mounted() {
        this.myEcharts();
    }
}
</script>

<!--scoped保证样式只影响当前页面-->
<style scoped>
@import '../assets/css/font.css';


/*图表样式*/
.NMGraphChart {
    /*图表宽度高度 用来设定图表展示出来的大小 一定要设置*/
    width: 1000px;
    height: 1400px;
    background-size: cover;
    margin-left: 400px;
    margin-top: -50px;
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
    font-size: 50px;
    color: rgba(2, 3, 9, 0.6);
    flex: 1;
    width: 100px;
    height: 100px;
    margin-top: 100px;
    margin-left: 100px;
    z-index: 1;
}


.main {
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 8000px;
    height: 100vh;
    left: 6500px;
    top: 0;
    /*align-items: center;*/
}

/*背景图设置*/
.mybackground {
    z-index: -1;
    position: relative;
    background-image: url("../assets/data/bg5.png");
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
}

</style>