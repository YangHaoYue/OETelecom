<template>
  <div>
    <div class="aboutUs text-white" :style="'background-image:url('+aboutUsImg+');'">
      <div class="title">关于我们</div>
      <div class="content">
        虚商世纪信息技术有限公司成立于2013年，是一家为各正规行业解决电销封号问题的高新技术企业，是联合多家虚拟运营商、服务供应商/经销商，致力于电销卡、电销抗封号线路、系统和周边服务的一站式业务公司。
      </div>
      <div class="content">
        公司拥有强大的品牌优势及丰富的虚商资源，号卡使用稳定，资费优惠透明，服务受理周全，凭借多年市场深耕及客户沉淀，不断延展的市场布局和不断拓宽的业务范围令我司在业内具有领先行业的优越性，现已成为客户高度信赖、虚商鼎力支持、业务伙伴长期认同的极具规模的领先平台企业。同时，虚商世纪始终秉持通过稳定防封的电销卡帮助客户实现电销资源化梦想的理念，以追求实现客户高成交的梦想为自己的经营目标，不断创新，追求卓越。
      </div>
      <div class="content">
        通过自有平台优势，已发展为中国用户规模、营收规模等综合效益前列的业内企业。随着业务的不断扩大和发展，虚商世纪的的足迹和业务触角已经覆盖全国。 
      </div>
      <div class="content">
        未来，虚商世纪也将持续发挥专业价值，提供优质完善的产品及售后服务，助力产业升级。为推动中国产业互联网的进程努力，力求让每位用户从虚商世纪获得良好的通信服务体验，快速提升企业运营效率并实现销售业绩增长！
      </div>
      <n-space justify="space-around" align="center" style="width:100%;">
        <img src="../../public/img/Desktop/xxsj-wbe_aboutus/trophy1.png" alt="">
        <img src="../../public/img/Desktop/xxsj-wbe_aboutus/trophy2.png" alt="">
        <img src="../../public/img/Desktop/xxsj-wbe_aboutus/trophy3.png" alt="">
      </n-space>
    </div>

    <div class="card">
      <div class="title">发展历程</div>
      <swiper :sliderCurrent="sliderCurrent"></swiper>
      <div class="slider" @click="changeSlider">
        <div class="item" :class="sliderCurrent?'slide-item-right':'slide-item-left'"></div>
      </div>
    </div>

    <img class="beehive" src="../../public/img/Desktop/xxsj-wbe_aboutus/bg1.jpg" alt="">

    <!-- <div class="products">
      <div class="title">品牌形象</div>
      <n-grid :cols="4" x-gap="20">
        <n-gi>
          <div class="video-item">
             <div style="width:270px;height:200px;background-color:red;"></div>
          </div>
        </n-gi>
        <n-gi>
          <div class="video-item">
             <div style="width:270px;height:200px;background-color:red;"></div>
          </div>
        </n-gi>
        <n-gi>
          <div class="video-item">
             <div style="width:270px;height:200px;background-color:red;"></div>
          </div>
        </n-gi>
        <n-gi>
          <div class="video-item">
             <div style="width:270px;height:200px;background-color:red;"></div>
          </div>
        </n-gi>
      </n-grid>
    </div> -->

    <div class="joinUs" :style="'background-image:url('+joinUsImg+');'">
      <div class="title">加入我们</div>
      <div class="content">如果你怀揣激情与梦想愿在互联网通信行业深耕；如果你身怀专业与创意敢于为行业赋能；如果你自信富有野心试图推进行业变革；正好，我们有一席位等你助力。</div>
      <div class="content">加入虚商世纪，携手踏入通信世界；我们将为你提供创造与颠覆的机会；共赴未来，助力成功!</div>
      <div class="joinBtn" @click="joinUs">查找符合你的职位</div>
    </div>

    <div class="Investment">
      <div class="title">招商加盟</div>
      <div class="content pinkcard text-white">
        <div class="subheading">渠道合作</div>
        <div class="body">
           <div>虚商渠道合作：地区代理、虚商渠道合作、加盟代理；</div>
           <div>行业合作：智能终端&互联网+产品渠道合作；</div>
           <div>联系人：吴经理</div>
           <div>移动电话：16505000006</div>
           <div>微信：16505000006</div>
        </div>
      </div>
      <div class="content">
        <div class="subheading">终端合作</div>
        <div class="body">
           <div>呼叫中心业务渠道合作</div>
           <div>终端用户合作：各企、事业单位、集团大客户行业应用；</div>
           <div>联系人：杨经理</div>
           <div>移动电话：16505000001</div>
           <div>微信：16505000001</div>
        </div>
      </div>
      <div class="content pinkcard text-white">
        <div class="subheading">品牌推广与新媒体运营</div>
        <div class="body">
           <div>虚商世纪品牌推广、媒体合作与新媒体运营</div>
           <div>联系人：杨经理</div>
           <div>移动电话：16218192866</div>
        </div>
      </div>
      <div class="content">
        <div class="subheading">卡池线路合作</div>
        <div class="body">
           <div>外呼中心卡池线路合作</div>
           <div>联系人：吴先生</div>
           <div>移动电话：170531277777</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
    import {
        NSpace,
        NGrid,
        NGi
    } from 'naive-ui'
    import swiper from "./commponents/swiper.vue";
    import {
        ref,
        reactive
    } from 'vue'
    import { useRouter } from 'vue-router'

    //控制card滑块滚动效果，实现轮播图
    const sliderCurrent = ref(false)

    function changeSlider() {
        sliderCurrent.value = !sliderCurrent.value
    }
    const aboutUsImg = new URL('../../public/img/Desktop/xxsj-wbe_aboutus/TestimonialBackground.jpg', import.meta.url).href
    const joinUsImg = new URL('../../public/img/Desktop/xxsj-wbe_aboutus/joinUs.jpg',import.meta.url).href
    
    const router = useRouter()
    const joinUs = ()=>{
          router.push({
            name:'JoinUs'
          })
    }
</script>

<style lang="scss" scoped>
    .aboutUs {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 980px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 107px 80px 0;
        .title {
            font-size: 40px;
            margin-bottom: 70px;
            font-weight: 800;
            letter-spacing: 5px;
            text-align: center;
            color: #fff;
        }
        .content {
            text-indent: 50px;
            font-size: 18px;
            letter-spacing: 2px;
            line-height: 30px;
            margin: 3px 150px;

        }
        img {
            margin-top: 50px;
            width: 300px;
            height: 320px;
        }
    }
    
    .card {
        background-color: #fff;
        width: 1500px;
        height: 430px;
        border-radius: 15px;
        box-shadow: 5px 5px 15px rgba(210, 210, 210, .5);
        margin: -90px auto 0;
        padding: 40px;
        color: #000000;
        .title {
            font-size: 40px;
            margin-bottom: 30px;
            font-weight: 800;
            letter-spacing: 5px;
            text-align: center;
            color: #333;
        }
    }
    
    .slider {
        width: 120px;
        height: 10px;
        border: 1px solid #E14F60;
        margin: 50px auto 0;
        .item {
            width: 60px;
            height: 100%;
            background-color: #E14F60;
        }
    }
    
    .beehive {
        height: 800px;
        margin-top: 80px;
        vertical-align: top;
        width: 100%;
    }
    
    .products {
        background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/products.png');
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 620px;
        padding: 40px 40px 0;
        .title {
            font-size: 40px;
            margin-bottom: 30px;
            font-weight: 800;
            letter-spacing: 5px;
            text-align: center;
            color: #fff;
        }
        .video-item {
            background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/copy.png');
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 386px;
            width: 270px;
            margin: auto;
        }
    }
    
    .joinUs {
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 586px;
        padding: 50px 80px 0;
        .title {
            font-size: 40px;
            margin-bottom: 30px;
            font-weight: 800;
            letter-spacing: 5px;
            text-align: center;
            color: #fff;
        }
        .content {
            color: #fff;
            font-size: 20px;
            letter-spacing: 2px;
            line-height: 36px;
            text-indent: 44px;
        }
        .joinBtn {
            width: 340px;
            height: 70px;
            margin: 120px auto 0;
            border-radius: 15px;
            box-shadow: 3px 3px 10px rgba(254, 109, 1, .5);
            text-align: center;
            line-height: 70px;
            color: #fff;
            font-size: 24px;
            background-image: linear-gradient(to bottom, #FE6D01, #E89954);
        }
        .joinBtn:hover {
            cursor: pointer;
        }
    }
    
    .Investment {
        padding: 50px 150px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .title {
            font-size: 40px;
            margin-bottom: 30px;
            font-weight: 800;
            letter-spacing: 5px;
            text-align: center;
            color: #333;
        }
        .pinkcard {
            background-color: #E14F60;
            border-radius: 45px;
            box-shadow: 5px 5px 15px #E14F60;
        }
        .content {
            color: #333;
            margin-left: 20px;
            width: 1400px;
            height: 245px;
            padding: 45px;
            .subheading {
                font-size: 26px;
                letter-spacing: 1px;
                line-height: 40px;
            }
            .body {
                font-size: 18px;
                line-height: 40px;
            }
        }
    }
</style>