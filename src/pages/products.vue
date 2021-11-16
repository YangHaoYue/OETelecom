<template>
  <div class="products">
      <div class="head">
          <n-grid :x-gap="12" :y-gap="30" :cols="4">
            <n-grid-item>
                <div class="d-flex justify-items-center align-items-center" @click.prevent="scrollToItem('A')">
                    <div class="case">语音套餐A</div>
                </div>
            </n-grid-item>
            <n-grid-item>
                <div class="d-flex justify-items-center align-items-center" @click="scrollToItem('B')">
                    <div class="case">语音套餐B</div>
                </div>
            </n-grid-item>
            <n-grid-item>
                <div class="d-flex justify-items-center align-items-center" @click.prevent="scrollToItem('C')">
                    <div class="case">语音套餐C</div>
                </div>
            </n-grid-item>
            <n-grid-item>
                <div class="d-flex justify-items-center align-items-center" @click="scrollToItem('D')">
                    <div class="case">语音套餐D</div>
                </div>
            </n-grid-item>
            <n-grid-item>
               <div class="d-flex justify-items-center align-items-center" @click="scrollToItem('E')">
                    <div class="case">语音套餐E</div>
                </div>
            </n-grid-item>
            <n-grid-item>
                <div class="d-flex justify-items-center align-items-center" @click="scrollToItem('F')">
                    <div class="case">语音套餐F</div>
                </div>
            </n-grid-item>
          </n-grid>
      </div>
      <img src="../public/img/Desktop/xxsj-wbe_Product details/caseA.png" class="caseA" alt="">
      <img src="../public/img/Desktop/xxsj-wbe_Product details/caseB.png" class="caseB" alt="">
      <img src="../public/img/Desktop/xxsj-wbe_Product details/caseC.png" class="caseC" alt="">
      <img src="../public/img/Desktop/xxsj-wbe_Product details/caseD.png" class="caseD" alt="">
      <img src="../public/img/Desktop/xxsj-wbe_Product details/caseE.png" class="caseE" alt="">
      <img src="../public/img/Desktop/xxsj-wbe_Product details/caseF.png" class="caseF" alt="">
  </div>
</template>

<script setup>
    import {  } from 'vue'
    import { NGrid,NGridItem } from 'naive-ui'

    const scrollToItem = (className)=>{
        let top =  document.querySelector(`.case${className}`).offsetTop - 82;
        window.scrollTo({
            top,
            behavior:'smooth'
        })
    }
</script>

<style lang="scss">
.products{
    font-size: 0;
    .head{
        background-image: url('../public/img/Desktop/xxsj-wbe_Product details/head.png');
        background-size: 100%;
        background-repeat: no-repeat;
        height: 540px;
        padding: 500px 400px 0;
        .case{
            width: 150px;
            height: 60px;
            font-size: 22px;
            color: #fff;
            line-height: 60px;
            text-align: center;
            border: #fff solid 1px;
        }
        .case:hover{
            background-color: rgba(5,5,5,.5);
            border-color: rgba(5,5,5,.5);
        }
    }
    img{
        width: 100%;
        margin: 0;
    }
}
</style>