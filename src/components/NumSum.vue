<template>
  <div class='no'>
    <div class="no-top">
      <ul>
        <li>123456</li>
        <li>789101</li>
      </ul>
    </div>
    <div class="no-bottom">
      <ul>
        <li>前端需求人数</li>
        <li>市场供应人数</li>
      </ul>
    </div>
  </div>
</template>
 
<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted,ref } from 'vue';
export default defineComponent({
  name:'NumSum',
  setup() {
    return {}
  },
})
</script>
 
<style scoped lang='scss'>
/* 声明字体*/
@font-face {
  font-family: electronicFont;
  src: url(@/assets/font/DS-DIGIT.TTF);
}
.no{
  background: rgba(101,132,26,0.1);
  padding: .1875rem;
  .no-top{
  position: relative;
    border:.0125rem solid rgba(25,186,139,0.17);
    &::before{
      position: absolute;
      top:0;
      left:0;
      content:'';
      width: .375rem;
      height:.125rem;
      border-top:.025rem solid #02a6b5;
      border-left:.025rem solid #02a6b5;
    }
    &::after{
      position: absolute;
      bottom:0;
      right:0;
      content:'';
      width: .375rem;
      height:.125rem;
      border-bottom:.025rem solid #02a6b5;
      border-right:.025rem solid #02a6b5;
    }
    ul{
      display: flex;
      li{
        position: relative;
        flex:1;
        line-height: 1rem;
        font-size: 0.875rem;
        color:#ffeb7b;
        text-align: center;
        font-family: "electronicFont";
        &:first-child::after{
          content: '';
          position: absolute;
          top:25%;
          right:0;
          height:50%;
          width: .0125rem;
          background: rgba(255,255,255,0.2);
        }
      }
    }
  }
  .no-bottom{
    ul{
      display: flex;
      li{
        flex:1;
        text-align: center;
        color:rgba(255, 255, 255, 0.7);
        font-size:0.225rem;
        height:.5rem;
        line-height: .5rem;
        padding-top:.125rem;
      }
    }
  }
}
</style>