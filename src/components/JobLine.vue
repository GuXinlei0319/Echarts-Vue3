<template>
  <h2>
    折线图-人员变化
    <a href="javascript:;" @click="changeYear(0)"
      >2020 /</a
    >
    <a href="javascript:;" @click="changeYear(1)">
      2021</a
    >
  </h2>
  <div class="chart" id="jobline"></div>
</template>
 
<script lang='ts'>
import { defineComponent, onMounted, reactive } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "JobLine",
  setup() {
    const reData = reactive({
      yearData: [
        {
          year: "2020", // 年份
          data: [
            // 两个数组是因为有两条线
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
          ],
        },
        {
          year: "2021", // 年份
          data: [
            // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34],
          ],
        },
      ],
    });
    const reOption = reactive({
      option: {
        // 通过这个color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          // 图例
          // 如果series 对象有name 值，则 legend可以不用写data
          textStyle: {
            // 修改图例组件 文字颜色
            color: "#4c9bfd",
          },
          right: "10%", // 这个10% 必须加引号
        },
        grid: {
          // 边框
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          show: true, // 显示边框
          borderColor: "#012f4a", // 边框颜色
          containLabel: true, // 包含刻度文字在内
        },

        xAxis: {
          type: "category",
          boundaryGap: false, //去除轴间距
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月",
          ],
          axisTick: {
            show: false, // 去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd", // 文本颜色
          },
          axisLine: {
            show: false, // 去除轴线
          },
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false, // 去除刻度线
          },
          axisLabel: {
            color: "#4c9bfd", // 文本颜色
          },
          axisLine: {
            show: false, // 去除轴线
          },
          splitLine: {
            lineStyle: {
              color: "#012f4a", // 分割线颜色
            },
          },
        },
        series: [
          {
            name: "新增粉丝",
            type: "line",
            smooth: true, //smooth可以让我们的折线显示带有弧度
            data: reData.yearData[0].data[0],
          },
          {
            name: "新增游客",
            type: "line",
            smooth: true,
            data: reData.yearData[0].data[1],
          },
        ],
      },
    });

    function changeYear(key:number){
      reOption.option.series[0].data = reData.yearData[key].data[0]
      reOption.option.series[1].data = reData.yearData[key].data[1]
      let jobline = document.getElementById("jobline");
      if (jobline) {
        let myChart = echarts.init(jobline);
        myChart.setOption(reOption.option);
      }
    } 

    onMounted(() => {
      let jobline = document.getElementById("jobline");
      if (jobline) {
        let myChart = echarts.init(jobline);
        myChart.setOption(reOption.option);
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }
    });
    return { changeYear };
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
  a {
    color: #fff;
  }
}
.chart {
  height: 3rem;
}
</style>