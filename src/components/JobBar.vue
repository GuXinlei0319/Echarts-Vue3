<template>
  <h2>柱形图-就业行业</h2>
  <div class="chart" id="jobbar"></div>
</template>
 
<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "JobBar",
  setup() {
    let option = {
      color: ["#2f89cf"],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      // 修改图表的大小
      legend: {
        show: true,
        textStyle: {
          // 菜单字体样式
          color: "white",
        },
        x: "right", //菜单位置
        data: ["访问", "直接"],
      },
      grid: {
        left: "0%",
        top: "10px",
        right: "0%",
        bottom: "4%",
        containLabel: true,
      },
      xAxis: [
        {
          type: "category",
          data: [
            "旅游行业",
            "教育培训",
            "游戏行业",
            "医疗行业",
            "电商行业",
            "社交行业",
            "金融行业",
          ],
          axisTick: {
            alignWithLabel: true,
          },
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: "12",
          },
          // 不显示x坐标轴的样式（有默认样式）
          axisLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          // 修改刻度标签 相关样式
          axisLabel: {
            color: "rgba(255,255,255,.6) ",
            fontSize: 12,
          },
          // y轴的线条改为了 2像素
          axisLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
              width: 2,
            },
          },
          // y轴分割线的颜色
          splitLine: {
            lineStyle: {
              color: "rgba(255,255,255,.1)",
            },
          },
        },
      ],
      series: [
        {
          name: "访问",
          type: "bar",
          barWidth: "35%", //柱子宽度
          // 一般ajax请求数据
          data: [200, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5,
          },
        },
        {
          name: "直接",
          type: "bar",
          barWidth: "35%", //柱子宽度
          // 一般ajax请求数据
          data: [200, 300, 300, 900, 1500, 1200, 600],
          itemStyle: {
            // 修改柱子圆角
            barBorderRadius: 5,
          },
        },
      ],
    };
    onMounted(() => {
      let jobbar = document.getElementById("jobbar");
      if (jobbar) {
        let myChart = echarts.init(jobbar);
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