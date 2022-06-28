<template>
  <div class="map">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
  </div>
</template>
 
<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  name: "EGloble",
  components: {
    //EMap
  },
  setup() {
    return {};
  },
});
</script>
 
<style scoped lang='scss'>
.map {
  position: relative;
  height: 10rem;
  .map1 {
    width: 6.475rem;
    height: 6.475rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(@/assets/images/map.png);
    background-size: 100% 100%;
    opacity: 0.3;
  }
  .map2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8.0375rem;
    height: 8.0375rem;
    background: url(@/assets/images/lbx.png);
    background-size: 100% 100%;
    opacity: 0.6;
    animation: rotate1 15s linear infinite;
  }
  .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 7.075rem;
    height: 7.075rem;
    background: url(@/assets/images/jt.png);
    background-size: 100% 100%;
    opacity: 0.8;
    animation: rotate2 10s linear infinite;
  }
  @keyframes rotate1 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes rotate2 {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-360deg);
    }
  }
}
</style>