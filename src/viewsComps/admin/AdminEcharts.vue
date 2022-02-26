<template>
  <div id="echart-part">
    <section id="echart-a" class="h-[400px] flex-1 mx-auto"></section>
    <section id="echart-b" class="h-[400px] flex-1 mx-auto"></section>
    <section id="echart-c" class="h-[400px] flex-1 mx-auto"></section>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import * as echarts from "echarts";
import { echartsA, echartsB, echartsC } from "./userData";
nextTick(() => {
  // 基于准备好的dom，初始化echarts实例
  const myChartA = echarts.init(document.querySelector("#echart-a")!);
  const myChartB = echarts.init(document.querySelector("#echart-b")!);
  const myChartC = echarts.init(document.querySelector("#echart-c")!);
  // 绘制图表
  myChartA.setOption(echartsA);
  myChartB.setOption(echartsB);
  myChartC.setOption(echartsC);
});
</script>

<style lang="scss">
#echart-part {
  @apply bg-white my-4 p-5 flex md:flex-row flex-col;
}
</style>
