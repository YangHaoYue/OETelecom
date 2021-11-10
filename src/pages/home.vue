<template>
  <div>
      <n-carousel show-arrow trigger="hover" autoplay>
        <img class="carousel-img" src="../public/img/Desktop/xxsj-wbe_home/banner1.png" />
        <img class="carousel-img" src="../public/img/Desktop/xxsj-wbe_home/banner2.png" />
        <img class="carousel-img" src="../public/img/Desktop/xxsj-wbe_home/banner3.png" />
    </n-carousel>


    <n-space justify="space-around"  style="background-color:#000000;padding:0 90px;margin:0px;">
        <div class="py-3 pl-5" v-for="(item,index) in firstColList" :key="index">
            <div class=""  :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                <div class="d-flex align-items-end" style="line-height:1.2;color:#0095E2;">
                    <div style="font-size:34px;font-weight:500;">{{item.title}}</div>
                    <div style="font-size:23px;">{{item.unit}}</div>
                </div>
                <div class="" style="font-size:18px;color:#fff;margin-top:10px;">{{item.content}}</div>
            </div>
        </div>
    </n-space>

    <div class="serve">
      <div class="d-flex flex-column align-items-center" style="color:#DDDCDC;margin-bottom:100px;padding-top:40px;">
          <div class="text-ZY">服务领域</div>
          <div style="line-height: 1.4;font-size:30px;">Package prices</div>
          <div style="line-height: 1.4;font-size:30px;">服务范围涉及多个类型，多个领域</div>
      </div>
      <div>
        <n-grid :cols="20" :x-gap="1">
            <n-gi :span="3" :offset="1">
                <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                    <div class="d-flex flex-column align-items-center">
                        <img src="../public/img/Desktop/xxsj-wbe_home/voice.png" style="width:70px;height:70px;"/>
                        <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">语音卡</div>
                    </div>
                </div>
            </n-gi>
            <n-gi :span="4" :offset="1">
                <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                    <div class="d-flex flex-column align-items-center">
                        <img src="../public/img/Desktop/xxsj-wbe_home/wallet.png" style="width:70px;height:70px;"/>
                        <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">流量卡</div>
                    </div>
                </div>
            </n-gi>
            <n-gi :span="4" :offset="1">
                <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                    <div class="d-flex flex-column align-items-center">
                        <img src="../public/img/Desktop/xxsj-wbe_home/register.png" style="width:70px;height:70px;"/>
                        <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">0 月租卡</div>
                    </div>
                </div>
            </n-gi>
            <n-gi :span="3" :offset="1">
                <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                    <div class="d-flex flex-column align-items-center">
                        <img src="../public/img/Desktop/xxsj-wbe_home/phone.png" style="width:70px;height:70px;"/>
                        <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">外呼系统</div>
                    </div>
                </div>
            </n-gi>
        </n-grid>
      </div>
    </div>


    <div class="products">
        <div class="d-flex flex-column align-items-center" style="color:#DDDCDC;margin-bottom:100px;padding-top:40px;">
            <div class="text-ZY">产品营销</div>
            <div style="line-height: 1.4;font-size:30px;">Package prices</div>
            <div style="line-height: 1.4;font-size:20px;">多种套餐，多种组合，多样搭配方式，满足你的不同需求。</div>
        </div>
        <div>
            <n-grid :cols="20" :x-gap="1">
                <n-gi :span="3" :offset="1">
                    <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                        <div class="d-flex flex-column align-items-center">
                            <img src="../public/img/Desktop/xxsj-wbe_home/case.png" style="width:70px;height:70px;"/>
                            <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">多样化品牌套餐</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">语音卡系列</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">流量卡系列</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">0月租卡</div>
                        </div>
                    </div>
                </n-gi>
                <n-gi :span="4" :offset="1">
                    <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                        <div class="d-flex flex-column align-items-center">
                            <img src="../public/img/Desktop/xxsj-wbe_home/cooperate.png" style="width:70px;height:70px;"/>
                            <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">多种合作方式</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">终端客户</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">下级代理</div>
                        </div>
                    </div>
                </n-gi>
                <n-gi :span="4" :offset="1">
                    <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                        <div class="d-flex flex-column align-items-center">
                            <img src="../public/img/Desktop/xxsj-wbe_home/scene.png" style="width:70px;height:70px;"/>
                            <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">多场景的使用方案</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">企业电销</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">微信社群运营</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">游戏、视频流量使用</div>
                        </div>
                    </div>
                </n-gi>
                <n-gi :span="3" :offset="1">
                    <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                        <div class="d-flex flex-column align-items-center">
                            <img src="../public/img/Desktop/xxsj-wbe_home/app.png" style="width:70px;height:70px;"/>
                            <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">领先的平台支持</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">业内领先一站式平台</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">骚扰拦截、诈骗预警</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">一键拨号、任务管理</div>
                        </div>
                    </div>
                </n-gi>
            </n-grid>
        </div>
    </div>
    <div class="cooperate">
        <div class="d-flex flex-column align-items-center" style="color:#DDDCDC;margin-bottom:100px;padding-top:40px;">
            <div class="text-ZY">合作伙伴</div>
            <div style="line-height: 1.4;font-size:30px;">news information</div>
            <div style="line-height: 1.4;font-size:20px;">我们最大的使命就是让客户的选择变得坚定和正确</div>
            <div style="line-height: 1.4;font-size:20px;">为客户创造最大的价值从而实现自己的价值</div>
        </div>
        
    </div>
    <div style="height:1000px;">
        {{scrollNumber}}
    </div>
  </div>
</template>

<script setup>
    import { reactive , watchEffect} from 'vue'
    import { NCarousel,NSpace,NGrid,NGridItem,NGi} from 'naive-ui'
    import watchScorll from '../hooks/watchScorll'


    const scrollNumber = watchScorll()
    const firstColList=[ {title:'5',unit:'星', content:'诈骗预警，骚扰拦截'},
                {title:'10',unit:'年', content:'10年专注虚商运营业务'},
                {title:'13',unit:'+品牌', content:'多家合作品牌供选择'},
                {title:'99%',unit:'', content:'覆盖全国99%的行业'},
                {title:'200000',unit:'+', content:'企业客户共同信赖'}]
    watchEffect(()=>{
        console.log(scrollNumber.value)
    })
</script>

<style>
.carousel-img {
  width: 100%;
  height: 680px;
  object-fit: cover;
}
.d-flex{
    display: flex;
    flex-direction: row;
}
.flex-column{
    flex-direction: column;
}
.align-items-end{
    align-items: flex-end;
}
.align-items-center{
    align-items: center;
}
.text-white{
    color: #fff;
}
.mt-2{
    margin-top: 20px;
}

.serve{
     background-image: url('../public/img/Desktop/xxsj-wbe_home/serve_bg.jpg');
     background-repeat: no-repeat;
     background-size: 100%;
     height: 520px;
 }
 .text-ZY{
    font-size: 70px;
    font-family: ZhenyanGB;
    font-weight: 400;
    color: #fff;
    line-height: 70px;
 }
 .products{
     background-color: #2C2F32;
     width: 100%;
     height: 600px;
 }
 .cooperate{
     background-image: url('../public/img/Desktop/xxsj-wbe_home/cooperater.png');
     background-repeat: no-repeat;
     background-size: 100%;
     height: 700px;
 }
</style>