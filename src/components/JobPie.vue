<template>
  <h2>饼形图-年龄分布</h2>
  <div class="chart" id="jobpie"></div>
</template>
 
<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "JobPie",
  setup() {
    let option = {
      color: ["pink", "yellow", "#0682ab", "orange", "blue"],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },

      legend: {
        bottom: "0%",
        // 修改小图标的大小
        itemWidth: 10,
        itemHeight: 10,
        // 修改图例组件的文字为 12px
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "年龄分布",
          type: "pie",
          // 这个radius可以修改饼形图的大小
          // radius 第一个值是内圆的半径 第二个值是外圆的半径
          radius: ["40%", "60%"],
          center: ["50%", "45%"],
          avoidLabelOverlap: false,
          // 图形上的文字
          label: {
            show: false,
            position: "center",
          },
          // 链接文字和图形的线是否显示
          labelLine: {
            show: false,
          },
          data: [
            { value: 1, name: "0岁以下" },
            { value: 4, name: "20-29岁" },
            { value: 2, name: "30-39岁" },
            { value: 2, name: "40-49岁" },
            { value: 1, name: "50岁以上" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 50,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    onMounted(() => {
      let jobpie = document.getElementById("jobpie");
      if (jobpie) {
        let myChart = echarts.init(jobpie);
        myChart.setOption(option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
    });
    return {};
  },
});
</script>
 
<style scoped lang='scss'>
h2 {
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  font-size: 0.25rem;
  font-weight: 400;
}
.chart {
  height: 3rem;
}
</style>