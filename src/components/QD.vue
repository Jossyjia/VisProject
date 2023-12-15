DesignPage.vue
<template>
    <div class="mybackground"></div>
    <div class="main">
        <div class="background">
            <button class="button1" @click="showImage('sddx.png', { top: 50, left: 550 })">
                按钮1
            </button>
            <button class="button2" @click="showImage('hj.png', { top: 50, left: 510 })">
                按钮2
            </button>
            <button class="button3" @click="showImage('qd.png', { top: 50, left: 510 })">
                按钮3
            </button>
            <button class="button4" @click="showImage('a.png', { top: 200, left: 500 })">
                按钮4
            </button>
            <button class="button5" @click="showImage('pj.jpg', { top: 50, left: 500 })">
                按钮5
            </button>
            <button class="button6" @click="showImage('yz.jpg', { top: 50, left: 500 })">
                按钮6
            </button>
            <div id="imageContainer"></div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'QDGraph',
    methods: {
        showImage(imageSrc, position) {
            const imageContainer = document.getElementById('imageContainer');
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = '图片';
            img.style.top = position.top + 'px';
            img.style.left = position.left + 'px';
            setTimeout(function () {
                img.style.opacity = '1';
            }, 50);
            imageContainer.innerHTML = '';
            imageContainer.appendChild(img);
        }
    },
}
</script>

<!--scoped保证样式只影响当前页面-->
<style scoped>
@import '../assets/css/font.css';

img {
    position: fixed;
    width: 1000px;
    background-size: cover;
    height: 1000px;
    display: block;
}

.background {
    width: 1000px;
    height: 1000px;
    background-image: url('../assets/data/map.png');
    background-size: cover;
}


.button1 {
    display: block;
    margin-bottom: 10px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 40px; /* Adjust the width of the button */
    height: 40px; /* Adjust the height of the button */
    border-radius: 50%; /* Make the button circular */
    margin-top: 200px;
    margin-left: 100px;
}

.button2 {
    display: block;
    margin-bottom: 10px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 40px; /* Adjust the width of the button */
    height: 40px; /* Adjust the height of the button */
    border-radius: 50%; /* Make the button circular */
    margin-top: 200px;
    margin-left: 200px;
}

.button3 {
    display: block;
    margin-bottom: 10px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 40px; /* Adjust the width of the button */
    height: 40px; /* Adjust the height of the button */
    border-radius: 50%; /* Make the button circular */
    margin-top: 200px;
    margin-left: 300px;
}

.button4 {
    display: block;
    margin-bottom: 10px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 40px; /* Adjust the width of the button */
    height: 40px; /* Adjust the height of the button */
    border-radius: 50%; /* Make the button circular */
    margin-top: 200px;
    margin-left: 400px;
}

.button5 {

    display: block;
    margin-bottom: 10px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 40px; /* Adjust the width of the button */
    height: 40px; /* Adjust the height of the button */
    border-radius: 50%; /* Make the button circular */
    margin-top: 200px;
    margin-left: 500px;
}

.button6 {
    display: block;
    margin-bottom: 10px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 40px; /* Adjust the width of the button */
    height: 40px; /* Adjust the height of the button */
    border-radius: 50%; /* Make the button circular */
    margin-top: 200px;
    margin-left: 600px;
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
    width: 13000px;
    height: 100vh;
    left: 10500px;
    top: 0;
    /*align-items: center;*/
}

/*背景图设置*/
.mybackground {
    z-index: -1;
    position: relative;
    background-image: url("../assets/data/bg7.png");
    width: 100%;
    min-height: 100vh;
    background-size: 100% 100%;
}

</style>