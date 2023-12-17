DesignPage.vue
<template>
    <div class="mybackground"></div>
    <div class="main">
        <div class="background">
            <button class="button1" @click="showImage('sddx.png', { top: '50', left: '950' },'山东大学百余年历程波澜起伏，光彩纷呈，足令人感怀壮情；\n孰不知，这其中还汇聚着中国早期博物馆的沧桑与斑驳，\n博物馆开启民智、传播知识的特殊作用在山东大学的教育史上留下了不可磨灭的印迹。\n一所百年老校在向世界一流名校攀越，深厚的文化底蕴和历史积淀已浑化成一股强劲的撑力，\n撑点越高，我们就跃得更高，并激发着我们向更高无限挑战。',{top: '480px', left: '950px'})">
                按钮1
            </button>
            <button class="button2" @click="showImage('hj.png', { top: '50', left: '910' },'中国人民解放军海军博物馆，是中国唯一一座反映中国海军发展的军事博物馆，\n是人民海军的历史高地、精神高地、文化高地。\n海军博物馆围绕传承红色基因、牢记初心使命，强化历史记忆、发挥教育功能，\n着力建成国内领先、世界一流的海军博物馆。',{top: '480px', left: '950px'})">
                按钮2
            </button>
            <button class="button3" @click="showImage('qd.png', { top: '50', left: '910' },'青岛市博物馆，坐落于这片历史悠久而充满活力的城市，\n其百余年的历程同样波澜壮阔，见证了青岛的发展和变迁。\n青岛市博物馆不仅是历史的守护者，更是开启民智、传播知识的特殊平台。\n通过精心策划的展览和教育项目，博物馆为广大观众提供了一个深入了解本地历史、文化的机会，\n为社会的进步和发展贡献着自己的力量。',{top: '480px', left: '950px'})">
                按钮3
            </button>
            <button class="button4" @click="showImage('a.png', { top: '30', left: '900' },'青岛市位于中国东海岸，是一座充满着丰富历史文化底蕴的城市。\n这个城市以其深厚的历史传承和独特的文化景观而闻名，引人入胜的故事在这片古老土地上层层叠叠。\n青岛骄傲地拥有两座国家一级博物馆，陈列着丰富多彩的历史文物，展示着城市在不同时期的独特面貌。\n此外，还有三座国家二级博物馆,各种珍贵的展品向人们展示了青岛作为一个历史悠久的城市的深厚底蕴。\n这些博物馆不仅是历史的见证者，更是文化传承的宝库，为人们提供了一个深入了解青岛丰富多彩历史的窗口。',{top: '480px', left: '950px'})">
                主按钮
            </button>
            <button class="button5" @click="showImage('pj.png', { top: '50', left: '900' },'青岛啤酒博物馆共分为文化历史探秘、品味百年酒香、畅享欢聚时刻三个展区，\n打造百年历史文化、酿造工艺发展、体验啤酒魅力的神秘之旅。\n以优美的环境、优质的服务和独特的魅力，吸引了100多个国家和地区的中外宾客纷至沓来，\n自开馆以来累计接待游客超过一千万人次。',{top: '480px', left: '950px'})">
                按钮5
            </button>
            <button class="button6" @click="showImage('yz.png', { top: '50', left: '900' },'青岛一战遗址博物馆位于青岛市京山路26号，整个建筑造型像一只展翅飞翔的鸽子，寓意“牢记历史、珍爱和平”。\n以“还我青岛”为主题的对外抗争，成为现代民族意识觉醒的起点，\n因此而引发的“五四运动”，揭开了反帝反封建的爱国主义运动的新篇章。\n青岛一战遗址博物馆是目前国内唯一全面展现一战对中国命运影响的博物馆。',{top: '480px', left: '950px'})">
                按钮6
            </button>
            <div id="imageContainer"></div>
        </div>
    </div>
</template>


<script>
function fadeIn(element) {
    element.style.opacity = 0;
    let opacity = 0;
    const intervalId = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1; // 调整透明度增加的速度
            element.style.opacity = opacity;
        } else {
            clearInterval(intervalId);
        }
    }, 100); // 调整每次增加透明度的间隔时间
}
export default {
    name: 'QDGraph',
    methods: {
        showImage(imageSrc, position, textContent = '默认文是啥本', textPosition = {top: '20px', left: '0px'}) {
    const imageContainer = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = '图片';
    img.style.position = 'absolute';
    img.style.top = position.top+'px' ;
    img.style.left = position.left+'px' ;
    img.style.opacity = '0';
    const text = document.createElement('p');
    text.textContent = textContent;
    text.style.whiteSpace = 'pre-line';
    text.style.position = 'absolute';
    text.style.top = textPosition.top;
    text.style.left = textPosition.left;
    text.style.color = 'black';
    text.style.fontSize = '40px';
    text.style.opacity = '0';
    text.style.fontFamily ="Shouji, serif";
    setTimeout(function () {
        img.style.opacity = '1';
        text.style.opacity = '1';
    }, 500);

    imageContainer.innerHTML = '';
    fadeIn(img);
    fadeIn(text);
    imageContainer.appendChild(img);
    imageContainer.appendChild(text);
    
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
    margin-bottom: 30px;
    position: absolute;
    z-index: 2;
    opacity: 0.7;
    width: 80px; /* Adjust the width of the button */
    height: 80px; /* Adjust the height of the button */
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