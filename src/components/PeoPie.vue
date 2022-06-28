<template>
  <h2>饼形图-地区分布</h2>
  <div class="chart" id="peopie"></div>
</template>
 
<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "PeoPie",
  setup() {
    let option = {
      color: [
        "#006cff",
        "#60cda0",
        "#ed8884",
        "#ff9f7f",
        "#0096ff",
        "#9fe6b8",
        "#32c5e9",
        "#1d9dff",
      ],
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        bottom: "0%",
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          color: "rgba(255,255,255,.5)",
          fontSize: "12",
        },
      },
      series: [
        {
          name: "地区分布",
          type: "pie",
          radius: ["10%", "70%"],
          center: ["50%", "50%"],
          roseType: "radius",
          // 图形的文字标签
          label: {
            fontSize: 10,
          },
          // 链接图形和文字的线条
          labelLine: {
            // length 链接图形的线条
            length: 6,
            // length2 链接文字的线条
            length2: 8,
          },
          data: [
            { value: 20, name: "云南" },
            { value: 26, name: "北京" },
            { value: 24, name: "山东" },
            { value: 25, name: "河北" },
            { value: 20, name: "江苏" },
            { value: 25, name: "浙江" },
            { value: 30, name: "四川" },
            { value: 42, name: "湖北" },
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
      let peopie = document.getElementById("peopie");
      if (peopie) {
        let myChart = echarts.init(peopie);
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