<template>
  <div>
    <div class="swiper" ref="swiperScroll">
      <div class="d-flex flex-column align-items-start history-item">
        <img
          src="../../../public/img/Desktop/xxsj-wbe_aboutus/Shape(1).png"
          alt=""
        />
        <div class="title">2013年</div>
        <div class="line-pink"></div>
        <div class="content">
          四川阿斯赫信息技术有限公司初步诞生，涉足行业，初步以3C零配件供给为主，以电商行业为依托，联合当时某行业巨头向其门店供应3C配件。
        </div>
      </div>
      <div class="d-flex flex-column align-items-start history-item">
        <img
          src="../../../public/img/Desktop/xxsj-wbe_aboutus/Shape(2).png"
          alt=""
        />
        <div class="title">2014年</div>
        <div class="line-pink"></div>
        <div class="content">
          开始移动转售业务（虚拟运营商）代理，成为全国首家从事移动转售业务的代理商。
        </div>
      </div>
      <div class="d-flex flex-column align-items-start history-item">
        <img
          src="../../../public/img/Desktop/xxsj-wbe_aboutus/Shape.png"
          alt=""
        />
        <div class="title">2015-2016年</div>
        <div class="line-pink"></div>
        <div class="content">先后与当时行业内几家巨头取得合作。</div>
      </div>
      <div class="d-flex flex-column align-items-start history-item">
        <img
          src="../../../public/img/Desktop/xxsj-wbe_aboutus/career.png"
          alt=""
        />
        <div class="title">2017年</div>
        <div class="line-pink"></div>
        <div class="content">
          开启移动转售业务全国代理，至此已合作移动转售企业高达15家，成为全国移动转售业务代理资质业务业内的佼佼者。
        </div>
      </div>
      <div class="d-flex flex-column align-items-start history-item">
        <img
          src="../../../public/img/Desktop/xxsj-wbe_aboutus/industry.png"
          alt=""
        />
        <div class="title">2019年</div>
        <div class="line-pink"></div>
        <div class="content">
          开始涉足从事大宗贸易行业，次年筹备与国企联合申请移动转售资质，不久开始向工信部提交材料申请。
        </div>
      </div>
      <div class="d-flex flex-column align-items-start history-item">
        <img
          src="../../../public/img/Desktop/xxsj-wbe_aboutus/profession.png"
          alt=""
        />
        <div class="title">2021年</div>
        <div class="line-pink"></div>
        <div class="content">
          2021年，成立专业的语音管理系统事业部，以预防诈骗，骚扰，最大限度保障用户通信安全为使命，开发满足现在市场使用的软件。
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const props = defineProps({
  sliderCurrent: Boolean,
});
const swiperScroll = ref(null);
watch(
  () => props.sliderCurrent,
  (newVal) => {
    if (newVal) {
      var timerRight = setInterval(scrollRight, 1);
      setTimeout(() => {
        clearInterval(timerRight);
      }, 750);
    } else {
      var timerLeft = setInterval(scrollLeft, 1);
      setTimeout(() => {
        clearInterval(timerLeft);
      }, 750);
    }
  }
);
const scrollRight = () => {
  swiperScroll.value.scrollLeft += 8;
};
const scrollLeft = () => {
  swiperScroll.value.scrollLeft -= 8;
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none !important;
}

.swiper {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  flex-direction: row;
  justify-items: around;
  scrollbar-width: none !important;
  -ms-overflow-style: none;
}
.history-item {
  padding: 0 50px;
  min-width: 300px;
  margin: 0 55px;
  img {
    widows: 70px;
    height: 70px;
    margin-bottom: 5px;
  }
  .title {
    font-size: 26px;
    color: #031d5b;
    line-height: 40px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  .line-pink {
    width: 72px;
    height: 3px;
    margin: 10px 0;
    background: #dc3e51;
  }
  .content {
    font-size: 18px;
    font-weight: 400;
    color: #5b6c94;
    line-height: 36px;
    white-space: normal;
  }
}
.swiper-left {
  -webkit-animation: swiper-left 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: swiper-left 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes swiper-left {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes swiper-left {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
.swiper-right {
  -webkit-animation: swiper-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: swiper-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}
@-webkit-keyframes swiper-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
  }
}
@keyframes swiper-right {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
  }
}
</style>