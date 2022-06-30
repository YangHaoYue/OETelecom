<template>
  <div class="content">
    <div class="head" :style="'background-image:url(' + productsHeadImg + ');'">
      <n-grid :x-gap="12" :y-gap="30" :cols="4">
        <n-grid-item>
          <div
            class="d-flex justify-items-center align-items-center"
            @click.prevent="scrollToItem('A')"
          >
            <div class="case">语音套餐A</div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div
            class="d-flex justify-items-center align-items-center"
            @click="scrollToItem('B')"
          >
            <div class="case">语音套餐B</div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div
            class="d-flex justify-items-center align-items-center"
            @click.prevent="scrollToItem('C')"
          >
            <div class="case">语音套餐C</div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div
            class="d-flex justify-items-center align-items-center"
            @click="scrollToItem('D')"
          >
            <div class="case">语音套餐D</div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div
            class="d-flex justify-items-center align-items-center"
            @click="scrollToItem('E')"
          >
            <div class="case">语音套餐E</div>
          </div>
        </n-grid-item>
        <n-grid-item>
          <div
            class="d-flex justify-items-center align-items-center"
            @click="scrollToItem('F')"
          >
            <div class="case">语音套餐F</div>
          </div>
        </n-grid-item>
      </n-grid>
    </div>
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/caseA.jpg"
      class="caseA"
      alt=""
    />
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/caseB.jpg"
      class="caseB"
      alt=""
    />
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/caseC.jpg"
      class="caseC"
      alt=""
    />
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/caseD.jpg"
      class="caseD"
      alt=""
    />
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/caseE.jpg"
      class="caseE"
      alt=""
    />
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/caseF.jpg"
      class="caseF"
      alt=""
    />
    <img
      src="../public/img/Desktop/xxsj-wbe_Product/thunder.jpg"
      class="caseF"
      alt=""
    />
  </div>
</template>

<script setup>
import { NGrid, NGridItem } from "naive-ui";
const scrollToItem = (className) => {
  let top = document.querySelector(`.case${className}`).offsetTop - 82;
  window.scrollTo({ top, behavior: "smooth" });
};
const productsHeadImg = new URL(
  "../public/img/Desktop/xxsj-wbe_Product/productsHead.jpg",
  import.meta.url
).href;
</script>

<style lang="scss" scoped>
.content {
  font-size: 0;
  .head {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    min-height: 440px;
    padding: 500px 400px 0;
    .case {
      width: 150px;
      height: 60px;
      font-size: 22px;
      color: #fff;
      line-height: 60px;
      text-align: center;
      border: #fff solid 1px;
      cursor: pointer;
    }
    .case:hover {
      background-color: rgba(5, 5, 5, 0.5);
      border-color: rgba(5, 5, 5, 0.5);
    }
  }
  img {
    width: 100%;
  }
}
</style>