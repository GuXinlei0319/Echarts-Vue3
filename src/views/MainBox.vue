<template>
  <section class="mainbox">
    <!-- 左侧图表 -->
    <div class="column">
      <div class="panel">
        <JobBar></JobBar>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <JobLine></JobLine>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <JobPie></JobPie>
        <div class="panel-footer"></div>
      </div>
    </div>

    <!-- 中间图表 -->
    <div class="column">
      <!-- 数字模块 -->
      <NumSum></NumSum>
      <!-- 地图模块 -->
      <MapBox></MapBox>
    </div>

    <!-- 右侧图表 -->
    <div class="column">
      <div class="panel">
        <PeoBar></PeoBar>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <PeoLine></PeoLine>
        <div class="panel-footer"></div>
      </div>
      <div class="panel">
        <PeoPie></PeoPie>
        <div class="panel-footer"></div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import JobBar from "@/components/JobBar.vue";
import JobLine from "@/components/JobLine.vue";
import JobPie from "@/components/JobPie.vue";
import PeoBar from "@/components/PeoBar.vue";
import PeoLine from "@/components/PeoLine.vue";
import PeoPie from "@/components/PeoPie.vue";
import NumSum from "@/components/NumSum.vue";
import MapBox from "@/views/MapBox.vue";

export default defineComponent({
  name: "MainBox",
  components: {
    JobBar,
    JobLine,
    JobPie,
    NumSum,
    MapBox,
    PeoBar,
    PeoLine,
    PeoPie,
  },
});
</script>

<style lang="scss" scoped>
.mainbox {
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  overflow: hidden;
  .column {
    flex: 3;
  }
  .column:nth-child(2) {
    flex: 5;
    margin: 0 0.125rem 0.1875rem;
  }
  .panel {
    position: relative;
    height: 3.855rem;
    border: 0.0125rem solid rgba(25, 186, 139, 0.17);
    background: rgba(255, 255, 255, 0.03) url(@/assets/images/line.png);
    padding: 0 0.1875rem 0.5rem;
    margin-bottom: 0.1875rem;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0.125rem;
      height: 0.125rem;
      border-left: 0.025rem solid #02a6b5;
      border-top: 0.025rem solid #02a6b5;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 0.125rem;
      height: 0.125rem;
      border-top: 0.025rem solid #02a6b5;
      border-right: 0.025rem solid #02a6b5;
    }
    .panel-footer {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        width: 0.125rem;
        height: 0.125rem;
        border-bottom: 0.025rem solid #02a6b5;
        border-left: 0.025rem solid #02a6b5;
      }
      &::after {
        position: absolute;
        bottom: 0;
        right: 0;
        content: "";
        width: 0.125rem;
        height: 0.125rem;
        border-bottom: 0.025rem solid #02a6b5;
        border-right: 0.025rem solid #02a6b5;
      }
    }
  }
  .panel:nth-child(2){
    height: 3.8528rem;
  }
}
</style>


