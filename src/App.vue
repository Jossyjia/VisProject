<template>
    <div>
        <full-page :options="options" ref="page">
            <div class="section">
                <div class="slide">
                    <HomePage PageId="1" />
                </div>
                <div class="slide">
                    <RelicsGraph PageId="2" />
                </div>
                <div class="slide">
                    <RebuildGraph PageId="3" />
                </div>
                <div class="slide">
                    <ColorGraph PageId="4" />
                </div>
                <div class="slide">
                    <NMGraph PageId="5" />
                </div>
                <div class="slide">
                    <PMGraph PageId="6" />
                </div>
                <div class="slide">
                    <QDGraph PageId="7" />
                </div>
                <div class="slide">
                    <QMGraph PageId="8" />
                </div>
                <div class="slide">
                    <WordCloud PageId="9" />
                </div>
                <div class="slide">
                    <Geography PageId="10" />
                </div>
            </div>
        </full-page>
    </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import RelicsGraph from "@/components/RelicsGraph.vue";
import RebuildGraph from "@/components/RebuildGraph.vue";
import ColorGraph from "@/components/ColorGraph.vue";
import NMGraph from "@/components/NM.vue";
import PMGraph from "@/components/PM.vue";
import QDGraph from "@/components/QD.vue";
import QMGraph from "@/components/QM.vue";
import WordCloud from "@/components/WordCloud.vue";
import Geography from "@/components/Geography.vue";

export default {
    name: 'App',
    // 注册页面
    components: { PMGraph, NMGraph, ColorGraph, RelicsGraph, HomePage, RebuildGraph, QDGraph, QMGraph, WordCloud, Geography },
    data() {
        return {
            options: {
                credits: { enabled: false, label: '卧龙凤雏小组出品', position: 'right' },
                //是否使用键盘翻页
                keyboardScrolling: true,
                //是否显示导航
                navigation: false,
                //为每个section设置背景色
                sectionsColor: [],
                //是否显示箭头
                controlArrows: false
            }
        }
    },
}

</script>


<style>
/*样式设置*/
</style>
