DesignPage.vue
<template>
  <div class="mybackground">
    <div class="main">
      <div id="WordCloud" class="wordCloudChart"></div>
      <div class="title">
        <h1>词云</h1>
      </div>
    </div>
  </div>
</template>
<script>
import * as echarts from "echarts";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  name: "WordCloud",
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      worddata: [
      {name:"铜",value:189},
{name:"青花",value:167},
{name:"釉",value:130},
{name:"瓷",value:118},
{name:"饰",value:109},
{name:"圈足",value:105},
{name:"通体",value:99},
{name:"纹饰",value:94},
{name:"清乾隆",value:83},
{name:"印",value:81},
{name:"足",value:74},
{name:"白玉",value:74},
{name:"纸本",value:74},
{name:"腹部",value:73},
{name:"花卉",value:71},
{name:"年制",value:70},
{name:"造型",value:67},
{name:"碗",value:63},
{name:"款",value:63},
{name:"器",value:57},
{name:"口",value:56},
{name:"瓶",value:52},
{name:"圆形",value:50},
{name:"长方形",value:49},
{name:"龙纹",value:48},
{name:"鎏金",value:48},
{name:"盘",value:47},
{name:"浮雕",value:47},
{name:"清朝",value:45},
{name:"钤",value:45},
{name:"楷书",value:44},
{name:"外壁",value:44},
{name:"六字",value:44},
{name:"开光",value:44},
{name:"颈",value:44},
{name:"耳",value:44},
{name:"山水",value:44},
{name:"清雍正",value:43},
{name:"细腻",value:42},
{name:"敞口",value:42},
{name:"寓意",value:42},
{name:"雕",value:41},
{name:"青玉",value:41},
{name:"清康熙",value:40},
{name:"平底",value:40},
{name:"大清",value:40},
{name:"字",value:40},
{name:"图",value:40},
{name:"宋",value:40},
{name:"香炉",value:40},
{name:"刻",value:39},
{name:"底部",value:39},
{name:"厚",value:39},
{name:"刻有",value:39},
{name:"生动",value:38},
{name:"篆书",value:38},
{name:"白",value:38},
{name:"图案",value:37},
{name:"螭",value:37},
{name:"乾隆",value:36},
{name:"直径",value:36},
{name:"文物",value:36},
{name:"新石器",value:36},
{name:"时代",value:36},
{name:"弦",value:36},
{name:"纵",value:36},
{name:"绢本",value:36},
{name:"设色",value:36},
{name:"绘",value:35},
{name:"两侧",value:35},
{name:"横",value:35},
{name:"砚",value:34},
{name:"陶",value:34},
{name:"鼓腹",value:34},
{name:"象牙",value:34},
{name:"不",value:33},
{name:"珐琅",value:33},
{name:"嵌",value:32},
{name:"元",value:32},
{name:"莲花",value:32},
{name:"胎体",value:32},
{name:"地",value:32},
{name:"至",value:32},
{name:"均",value:32},
{name:"帖",value:32},
{name:"中堂",value:32},
{name:"青釉",value:32},
{name:"双",value:31},
{name:"铭文",value:31},
{name:"直口",value:31},
{name:"深腹",value:31},
{name:"画",value:31},
{name:"线条",value:31},
{name:"玉",value:31},
{name:"装饰",value:31},
{name:"下",value:31},
{name:"了",value:31},
{name:"腹径",value:31},
{name:"文化",value:31},
{name:"行书",value:30},
{name:"出",value:30},
{name:"腹",value:30},
{name:"折枝",value:29},
{name:"缠枝莲纹",value:29},
{name:"肩部",value:29},
{name:"盖",value:29},
{name:"透雕",value:29},
{name:"出版社",value:29},
{name:"正面",value:29},
{name:"颈部",value:29},
{name:"由",value:28},
{name:"内外",value:28},
{name:"三",value:28},
{name:"彩绘",value:28},
{name:"肩",value:28},
{name:"双圈",value:28},
{name:"规整",value:28},
{name:"页",value:28},
{name:"雕刻",value:28},
{name:"漆",value:28},
{name:"黄玉",value:28},
{name:"光亮",value:28},
{name:"朱",value:28},
{name:"施",value:27},
{name:"釉色",value:27},
{name:"中心",value:27},
{name:"莹润",value:27},
{name:"仿",value:27},
{name:"腹下",value:26},
{name:"器身",value:26},
{name:"状",value:26},
{name:"流畅",value:26},
{name:"部分",value:26},
{name:"精细",value:26},
{name:"民国",value:26},
{name:"编",value:26},
{name:"明朝",value:25},
{name:"黑漆",value:25},
{name:"吉祥",value:25},
{name:"回纹",value:24},
{name:"纹碗",value:24},
{name:"明代",value:24},
{name:"第",value:24},
{name:"整器",value:24},
{name:"釉面",value:24},
{name:"明宣德",value:24},
{name:"花纹",value:23},
{name:"对称",value:23},
{name:"卷",value:23},
{name:"云头",value:23},
{name:"雕琢",value:23},
{name:"两",value:23},
{name:"山石",value:23},
{name:"色泽",value:23},
{name:"得",value:23},
{name:"大明",value:23},
{name:"式",value:22},
{name:"制作",value:22},
{name:"白釉",value:22},
{name:"资料",value:22},
{name:"胎质",value:22},
{name:"着",value:22},
{name:"带",value:22},
{name:"清至",value:22},
{name:"方形",value:21},
{name:"牡丹",value:21},
{name:"撇",value:21},
{name:"兽面",value:21},
{name:"并",value:21},
{name:"背面",value:21},
{name:"梅花",value:21},
{name:"较",value:21},
{name:"白文",value:21},
{name:"玉质",value:21},
{name:"明嘉靖",value:21},
{name:"上部",value:20},
{name:"短颈",value:20},
{name:"工艺",value:20},
{name:"中间",value:20},
{name:"分别",value:20},
{name:"童子",value:20},
{name:"中部",value:20},
{name:"露胎",value:20},
{name:"号",value:20},
{name:"阴刻",value:20},
{name:"洗",value:20},
{name:"圆雕",value:20},
{name:"发表",value:20},
{name:"之一",value:20},
{name:"佛像",value:20},
{name:"葡萄",value:20},
{name:"釉质",value:20},
{name:"粉彩",value:20},
{name:"施白",value:20}
      ]
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChart();
    }, 500);
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById("WordCloud"));
      console.log('lll');
      const option = {
        // title: {
        //   text: "热爱祖国",
        //   x: "center"
        // // },
        // backgroundColor: "#fff",
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            shape: 'diamond',
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [30, 200],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            
            textStyle: {
              fontFamily: 'Xiaoyao',
              fontWeight: 'bold',
                color: function () {
                  const colors = [
                      "#223e36",  // 红色
                      "#61649f",  // 绿色
                      "#2e317c",  // 蓝色
                      "#1c2938",
                      "#475164",
                      "#0f1423",
                      "#525288",
                      "#93b5cf",
                      "#144a74",
                      "#126bae",
                       "#12a182#",
                       "#2983bb",
                       "#1a94bc",
                       "#51c4d3",
                       "#10aec2",
                       "#69a794",
                       "#1a6840",
                       "#229453",
                       "#373834",
                        // 黄色
                      // 可以继续添加其他颜色代码
                  ];
                  const randomIndex = Math.floor(Math.random() * colors.length);
                  return colors[randomIndex];}
              
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
             left: "center",
             top: "center",
            // right: null,
            // bottom: null,
            // width: "200%",
            // height: "200%",
            //数据
            data: this.worddata
          }
        ]
      };
      this.chart.setOption(option);
    },
  }
}
</script>
<style scoped>
.mybackground {
  z-index: -1;
  position: relative;
  background-image: url("../assets/data/bg6.png");
  width: 100%;
  min-height: 100vh;
  background-size: 100% 100%;
}
.wordCloudChart {
    /*图表宽度高度 用来设定图表展示出来的大小 一定要设置*/
    width: 1000px;
    height: 1000px;
    background-size: cover;
    margin-left: 400px;
    margin-top: 0px;
    margin-right: 0;
    /*margin-right: -10%;*/
    /*flex: 1;*/
    /*align-items: center;*/
}
</style>