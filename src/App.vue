<template>
  <HeaderNav></HeaderNav>
  <MainBox></MainBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderNav from "@/components/HeaderNav.vue"; // @ is an alias to /src
import MainBox from "@/views/MainBox.vue"; // @ is an alias to /src

export default defineComponent({
  components: {
    HeaderNav,
    MainBox,
  }
});
</script>

<style lang="scss">
</style>
