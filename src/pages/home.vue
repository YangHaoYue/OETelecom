<template>
  <div>
      <n-carousel show-arrow trigger="hover" autoplay>
        <img class="carousel-img" src="../public/img/Desktop/xxsj-wbe_home/banner1.png" />
        <img class="carousel-img" src="../public/img/Desktop/xxsj-wbe_home/banner2.png" />
        <img class="carousel-img" src="../public/img/Desktop/xxsj-wbe_home/banner3.png" />
    </n-carousel>


    <n-space justify="space-around"  style="background-color:#000000;padding:10px 90px;margin:0px;">
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
            <n-grid :cols="24" :x-gap="1">
                <n-gi :span="6">
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
                <n-gi :span="6">
                    <div :class="scrollNumber>100?'animate__animated  animate__bounceInDown':''">
                        <div class="d-flex flex-column align-items-center">
                            <img src="../public/img/Desktop/xxsj-wbe_home/cooperate.png" style="width:70px;height:70px;"/>
                            <div class="text-white mt-2" style="font-size:23px;color:#DDDCDC;">多种合作方式</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">终端客户</div>
                            <div class="text-white" style="font-size:16px;line-height:2;">下级代理</div>
                        </div>
                    </div>
                </n-gi>
                <n-gi :span="6">
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
                <n-gi :span="6">
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
        <n-grid>
            <n-gi :span="8" :offset="2">
                <div class="text-white">
                    <div class="d-flex align-items-start" style="border-bottom:solid 1px #fff;width:190px;line-height:1;">
                        <div style="font-size:110px;">10</div>
                        <div style="font-size:40px;margin-top:-20px;">+</div>
                    </div>
                    <div style="font-size:14px;margin-top:3px;letter-spacing:2px;">10年行业经验累计</div>
                </div>
                <div class="text-white mt-2">
                    <div class="d-flex align-items-start" style="border-bottom:solid 1px #fff;width:360px;line-height:1;">
                        <div style="font-size:110px;">5000</div>
                        <div style="font-size:40px;margin-top:-20px;">+</div>
                    </div>
                    <div style="font-size:14px;margin-top:3px;letter-spacing:2px;">5000家以上企业合作伙伴</div>
                </div>
                <div class="text-white mt-2">
                    <div class="d-flex align-items-start" style="border-bottom:solid 1px #fff;line-height:1;">
                        <div style="font-size:110px;">200000</div>
                        <div style="font-size:40px;margin-top:-20px;">+</div>
                    </div>
                    <div style="font-size:14px;margin-top:3px;letter-spacing:2px;">200000家终端合作客户遍布全国</div>
                </div>
            </n-gi>
            <n-gi :span="10" :offset="1">
                <img src="../public/img/Desktop/xxsj-wbe_home/cooperater_item.png" style="width:100%;object-fit: cover;margin-top:-20px;" />
            </n-gi>
        </n-grid>
    </div>
    <div class="news">
        <div class="d-flex flex-column align-items-center text-white" style="margin-bottom:100px;padding-top:40px;">
            <div class="text-ZY">新闻资讯</div>
            <div style="line-height: 1.4;font-size:30px;letter-spacing:2px;">cooperation partner</div>
            <div style="line-height: 1.2;font-size:16px;">在这里，了解最新的行业动态和风向</div>
        </div>
        <n-grid>
            <n-gi :span="4" :offset="4">
                <div class="d-flex flex-column text-white" style="letter-spacing:2px;">
                    <div style="font-size:16px;">工信部：强化虚商“一证通查”...</div>
                </div>
                <div class="green-line"></div>
                <div class="text-white" style="line-height:1.6;letter-spacing:4px;">
                    为进一步提升全国移动电话卡“一证通查”服务质量和水平，及时回应广大用户关切，身份验证不合规等突出问题...
                </div>
                <div class="d-flex text-white">9:00</div>
            </n-gi>
            <n-gi :span="4" :offset="2">
                <div class="d-flex flex-column text-white" style="letter-spacing:2px;">
                    <div style="font-size:16px;">工信部：二季度用户投诉量环比...</div>
                </div>
                <div class="green-line"></div>
                <div class="text-white" style="line-height:1.6;letter-spacing:2px;">
                    工信部发布2021年第二季度电信服务质量情况通告，各级电信用户申诉受理机构受理电信用户申诉26338件，环比下...
                </div>
                <div class="d-flex text-white">9:00</div>
            </n-gi>
            <n-gi :span="4" :offset="2">
                <div class="d-flex flex-column text-white" style="letter-spacing:2px;">
                    <div style="font-size:16px;">“断卡行动”有力打击各类违规...</div>
                </div>
                <div class="green-line"></div>
                <div class="text-white" style="line-height:1.6;letter-spacing:3px;">
                    工业和信息化部近期联合公安部发布了《关于依法清理整治涉诈电话卡、物联网卡以及关联互联网账号的通告》，指导电信企业建立...
                </div>
                <div class="d-flex text-white">9:00</div>
            </n-gi>
        </n-grid>
        <div class="more-btn">
            查看更多新闻
        </div>
    </div>
    <div class="footer d-flex align-items-center text-white">
        <div style="font-size:80px;letter-spacing:4px;font-weight:700;font-family: ZhenyanGB;">
            xushangshiji
        </div>
        <n-grid :cols="10">
            <n-gi :span="1" :offset="1">
                <div style="line-height: 1.4;font-size:20px;">产品中心</div>
                <div class="mt-2" style="line-height: 1.6;font-size:16px;">最新产品</div>
                <div style="line-height: 1.6;font-size:16px;">实时资讯</div>
            </n-gi>
            <n-gi :span="1" :offset="1">
                <div style="line-height: 1.4;font-size:20px;">商务中心</div>
                <div class="mt-2" style="line-height: 1.6;font-size:16px;">合作加盟</div>
                <div style="line-height: 1.6;font-size:16px;">售后服务</div>
            </n-gi>
            <n-gi :span="1" :offset="1">
                <div style="line-height: 1.4;font-size:20px;">呼叫中心</div>
                <div class="mt-2" style="line-height: 1.6;font-size:16px;">在线客服</div>
                <div style="line-height: 1.6;font-size:16px;">400电话</div>
            </n-gi>
            <n-gi :span="1" :offset="1">
                <div class="d-flex flex-column align-items-center">
                    <img src="../public/img/Desktop/xxsj-wbe_home/case.png" style="width:80px;height:80px;object-fit: cover;">
                    <div style="line-height: 1.4;font-size:18px;margin-top:5px;">APP下载</div>
                </div>
            </n-gi>
            <n-gi :span="1" :offset="1">
                <div class="d-flex flex-column align-items-center">
                    <img src="../public/img/Desktop/xxsj-wbe_home/case.png" style="width:80px;height:80px;object-fit: cover;">
                    <div style="line-height: 1.4;font-size:18px;margin-top:5px;">关注公众号</div>
                </div>
            </n-gi>
        </n-grid>
    </div>
  </div>
</template>

<script setup>
    import { reactive , watchEffect} from 'vue'
    import { NCarousel,NSpace,NGrid,NGi,NIcon,NImage,NButton} from 'naive-ui'
    import watchScorll from '../hooks/watchScorll'
    import {  } from '@vicons/ionicons5'


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
.align-items-start{
    align-items: flex-start;
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
    font-size: 80px;
    font-family: ZhenyanGB;
    font-weight: 600;
    color: #fff;
    line-height: 70px;
 }
 .products{
     background-color: #2C2F32;
     min-width: 100%;
     min-height: 600px;
 }
 .cooperate{
     background-image: url('../public/img/Desktop/xxsj-wbe_home/cooperater.png');
     background-repeat: no-repeat;
     background-size: 100%;
     min-height: 900px;
 }
 .news{
     background-color: #09837D;
     min-height: 700px;
 }
 .green-line{
     height: 2px;
     border-bottom: dashed 2px #FFFF00;
     margin: 10px 0;
 }
 .more-btn{
     text-align: center;
     font-size: 20px;
     color: #fff;
     line-height: 62px;
     letter-spacing: 4px;

     min-height: 62px;
     max-width: 340px;
     margin: 100px auto 20px;
     border: solid 2px #ffffff;
     border-radius: 10px;
 }
 .footer{
     background-color: #E14F60;
     height: 160px;
     padding: 50px;
 }
</style>