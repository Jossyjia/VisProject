DesignPage.vue
<template>
    <div class="mybackground"></div>
    <div class="main">
        <img src="word.png" alt="词云图" class="word_count">
        <img src="bar.png" alt="柱状图" class="bar">
        <div class="title">
            <h1>青博</h1><br>
            <h1>数据</h1>
        </div>
    </div>
</template>


<script>
export default {
    name: 'QMGraph',
}
</script>

<!--scoped保证样式只影响当前页面-->
<style scoped>
@import '../assets/css/font.css';

.word_count {
    width: 800px;
    height: 500px;
}

.bar {
    margin-left: -800px;
    margin-top: 500px;
    width: 800px;
    height: 500px;
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
    margin-left: 200px;
    z-index: 1;
}


.main {
    z-index: 10;
    position: fixed;
    display: flex;
    flex-direction: row;
    width: 14000px;
    height: 100vh;
    left: 12000px;
    top: 0;
    /*align-items: center;*/
}

/*背景图设置*/
.mybackground {
    z-index: -1;
    position: relative;
    background-image: url("../assets/data/bg8.png");
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
}

</style>