<template>
  <h2>柱形图-前端技术</h2>
  <div class="chart" id="peobar"></div>
</template>
 
<script lang='ts'>
import { defineComponent, onMounted } from "vue";
import * as echarts from "echarts";
export default defineComponent({
  name: "PeoBar",
  setup() {
    let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    interface DataIndex {
      dataIndex: number;
    }
    let option = {
      grid: {
        top: "10%",
        left: "22%",
        bottom: "10%",
        // 不给刻度标签保留位置
        // containLabel: true
      },
      // 不显示x轴的相关信息
      xAxis: {
        show: false,
      },
      yAxis: [
        {
          type: "category",
          // 数据反转
          inverse: true,
          data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
          // 不显示y轴的线
          axisLine: {
            show: false,
          },
          // 不显示刻度
          axisTick: {
            show: false,
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff",
          },
        },
        {
          data: [702, 350, 610, 793, 664],
          // 数据反转
          inverse: true,
          // 不显示y轴的线
          axisLine: {
            show: false,
          },
          // 不显示刻度
          axisTick: {
            show: false,
          },
          // 把刻度标签里面的文字颜色设置为白色
          axisLabel: {
            color: "#fff",
          },
        },
      ],
      series: [
        { 
          name: "条",
          type: "bar",
          data: [70, 34, 60, 78, 69],
          // 层叠效果
          yAxisIndex: 0,
          // 修改第一组柱子的圆角
          itemStyle: {
            barBorderRadius: 20,
            // 此时的color 可以修改柱子的颜色
            // 指定泛型接口约束
            color: function <T extends DataIndex>(params: T) {
              // params 传进来的是柱子对象
              // console.log(params);
              // dataIndex 是当前柱子的索引号
              return myColor[params.dataIndex];
            },
          },
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 8,
          // 显示柱子内的文字 图形上的文字标签
          label: {
            show: true,
            position: "inside",
            // {c} 会自动的解析为 数据  data里面的数据
            formatter: "{c}%",
            color:'#fff',
            fontSize:15,
            // color:function <T extends DataIndex>(params: T) {
            //   return myColor[params.dataIndex];
            // }
          },
        },
        {
          name: "框",
          type: "bar",
          barCategoryGap: 50,
          barWidth: 15,
          // 层叠效果
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100],
          itemStyle: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15,
          },
        },
      ],
    };
    onMounted(() => {
      let peobar = document.getElementById("peobar");
      if (peobar) {
        let myChart = echarts.init(peobar);
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
/* 约束屏幕尺寸 */

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