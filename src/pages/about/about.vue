<template>
  <div>
    <div class="aboutUs text-white">
      <div style="font-size:40px;margin-bottom:70px;font-weight:800;letter-spacing:5px;">关于我们</div>
      <div class="content">
        虚商世纪信息技术有限公司 总部位于成都，成立于2013年1月，是国家高新技术企业，中关村高新技术企业，主要管理团队成员来自于通讯行业与互联网行业著名设备供应商及运营商。
      </div>
      <div class="content">
        虚商世纪基于虚拟运营商实践探索，已探索出一条不局限于虚商业务的综合通讯业务云端运营平台发展之路，通过自有互联网化创新平台体系，迎合国家鼓励民资进入行业运营市场政策的同时，有效解决通讯行业资源网格化、业务获取复杂、合作门槛高、结算繁琐的现状与日益增加的通信业务需求，尤其通信业务需求间的矛盾，拥有着平台市场占位与广阔的发展空间。
      </div>
      <div class="content">
        虚商世纪通过自有平台优势，已发展为中国用户规模、营收规模等综合效益前列的业内企业。随着业务的不断扩大和发展，虚商世纪的的足迹和业务触角已经覆盖全国。
      </div>
      <n-space justify="space-around" align="center" style="width:100%;">
        <img src="../../public/img/Desktop/xxsj-wbe_aboutus/trophy1.png" alt="">
        <img src="../../public/img/Desktop/xxsj-wbe_aboutus/trophy2.png" alt="">
        <img src="../../public/img/Desktop/xxsj-wbe_aboutus/trophy3.png" alt="">
      </n-space>
    </div>
    <div class="card">
      <div style="font-size:40px;margin-bottom:70px;font-weight:800;letter-spacing:5px;text-align:center;">发展历程</div>
      <swiper :sliderCurrent="sliderCurrent"></swiper>
      <div class="slider" @click="changeSlider">
        <div class="item" :class="sliderCurrent?'slide-right':'slide-left'"></div>
      </div>

    </div>
  </div>
</template>

<script setup>
  import { NSpace,NGrid,NGi } from 'naive-ui'
  import  swiper from "./commponents/swiper.vue";
  import { ref } from 'vue'

  //控制card滑块滚动效果，实现轮播图
  const sliderCurrent = ref(false)
  function changeSlider(){
    sliderCurrent.value =! sliderCurrent.value
  }

</script>

<style lang="scss">
  .aboutUs{
    background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/TestimonialBackground.png');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 880px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 57px 80px 0;
    .content{
      text-indent: 50px;
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 30px;
      margin: 0 150px;
    }
    img{
      margin-top: 50px;
      width: 300px;
      height: 320px;
    }
  }
  .card{
    background-color: #fff;
    width: 1500px;
    height: 500px;
    border-radius: 15px;
    box-shadow: 5px 5px 15px rgba(210, 210, 210, .5);
    margin: -90px auto 0;
    padding: 40px;
    color: #000000;
  }
  .slider{
    width: 120px;
    height: 10px;
    border: 1px solid #E14F60;
    margin: 50px auto 0;
    .item{
    width: 60px;
    height: 100%;
    background-color: #E14F60;
    }
}
</style>