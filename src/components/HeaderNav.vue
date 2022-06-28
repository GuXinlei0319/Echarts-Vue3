<template>
  <header>
    <h1>{{ title }}</h1>
    <div class="showTime">{{ timenow }}</div>
  </header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from "vue";

export default defineComponent({
  name: "HeaderNav",
  setup() {
    let dt = new Date();
    let y = String(dt.getFullYear());
    let mt = String(dt.getMonth() + 1).padStart(2, "0");
    let day = String(dt.getDate()).padStart(2, "0");
    let h = String(dt.getHours()).padStart(2, "0"); //获取时
    let m = String(dt.getMinutes()).padStart(2, "0"); //获取分
    let s = String(dt.getSeconds()).padStart(2, "0"); //获取秒
    let now =
      "当前时间：" +
      y +
      "年" +
      mt +
      "月" +
      day +
      "日-" +
      h +
      "时" +
      m +
      "分" +
      s +
      "秒";

    const state = reactive({
      title: "数据可视化-Echarts",
      timenow: now,
    });
    function time() {
      let dt = new Date();
      let y = String(dt.getFullYear());
      let mt = String(dt.getMonth() + 1).padStart(2, "0");
      let day = String(dt.getDate()).padStart(2, "0");
      let h = String(dt.getHours()).padStart(2, "0"); //获取时
      let m = String(dt.getMinutes()).padStart(2, "0"); //获取分
      let s = String(dt.getSeconds()).padStart(2, "0"); //获取秒
      state.timenow =
        "当前时间：" +
        y +
        "年" +
        mt +
        "月" +
        day +
        "日-" +
        h +
        "时" +
        m +
        "分" +
        s +
        "秒";

      return state.timenow;
    }
    onMounted(() => {
      setInterval(() => {
        time();
      }, 1000);
    });

    return { ...toRefs(state) };
  },
});
</script>

<style scoped lang="scss">
header {
  position: relative;
  height: 1.25rem;
  background: url(@/assets/images/head_bg.png) no-repeat;
  background-size: 100% 100%;
  h1 {
    color: #fff;
    font-size: 0.475rem;
    line-height: 1rem;
    text-align: center;
  }
  .showTime {
    position: absolute;
    top: 0;
    right: 0.375rem;
    line-height: 0.9375rem;
    font-size: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>