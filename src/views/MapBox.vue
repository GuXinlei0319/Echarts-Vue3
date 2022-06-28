<template>
  <div class="cmap">
    <EGloble></EGloble>
    <EMap class="emapbox"></EMap>
  </div>
</template>
 
<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted, ref } from "vue";
import EGloble from "@/components/EGloble.vue";
import EMap from "@/components/EMap.vue";

export default defineComponent({
  name: "MapBox",
  components:{
    EGloble,
    EMap,
  },
  setup() {
    return {};
  },
});
</script>
 
<style scoped lang='scss'>
.cmap{
  position: relative;
}
.emapbox{
  position: absolute;
  top:0;
  left:0;
  }
</style>