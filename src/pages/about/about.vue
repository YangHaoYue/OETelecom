<template>
  <div>
    <div class="aboutUs text-white">
      <div class="title">关于我们</div>
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
      <div class="title">发展历程</div>
      <swiper :sliderCurrent="sliderCurrent"></swiper>
      <div class="slider" @click="changeSlider">
        <div class="item" :class="sliderCurrent?'slide-item-right':'slide-item-left'"></div>
      </div>
    </div>

    <div class="beehive"></div>

    <div class="products">
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
    </div>

    <div class="joinUs">
      <div class="title">加入我们</div>
      <div class="content">虚商世纪的技术发展来源于对前沿技术的不懈追求。员工是虚商世纪最宝贵的资源，他们的专业技术，工作激情及创新思维是虚商世纪的骄傲及成功的源动力。我们充分相信并尊重每位员工，希望通过提供持续的培训与发展支持个人的成长与成功。</div>
      <div class="content">不断的投资于员工是我们不变的承诺！</div>
      <div class="joinBtn">查找符合你的职位</div>
    </div>

    <div class="Investment">
      <div class="title">招商加盟</div>
      <div class="content">
        <div class="subheading">渠道合作</div>
        <div class="body">
           <div>虚商渠道合作：地区代理、虚商渠道合作、加盟代理；</div>
           <div>行业合作：智能终端&互联网+产品渠道合作；</div>
           <div>联系人：吴经理</div>
           <div>移动电话：16505000006</div>
           <div>微信：16505000006</div>
        </div>
      </div>
      <div class="content pinkcard text-white">
        <div class="subheading">终端合作</div>
        <div class="body">
           <div>呼叫中心业务渠道合作</div>
           <div>终端用户合作：各企、事业单位、集团大客户行业应用；</div>
           <div>联系人：杨经理</div>
           <div>移动电话：16505000001</div>
           <div>微信：16505000001</div>
        </div>
      </div>
      <div class="content">
        <div class="subheading">品牌推广与新媒体运营</div>
        <div class="body">
           <div>虚商世纪品牌推广、媒体合作与新媒体运营</div>
           <div>联系人：杨经理</div>
           <div>移动电话：16218192866</div>
        </div>
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
    background-size: 100% 100%;
    height: 980px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 107px 80px 0;
    .title{
      font-size:40px;
      margin-bottom:70px;
      font-weight:800;
      letter-spacing:5px;
      text-align: center;
      color: #fff;
    }
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
    .title{
      font-size:40px;
      margin-bottom:30px;
      font-weight:800;
      letter-spacing:5px;
      text-align: center;
      color: #333;
    }
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
  .beehive{
    background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/bg1.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 800px;
    margin-top: 80px;
  }
  .products{
    background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/products.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 620px;
    padding: 40px 40px 0;
    .title{
      font-size:40px;
      margin-bottom:30px;
      font-weight:800;
      letter-spacing:5px;
      text-align: center;
      color: #fff;
    }
    .video-item{
      background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/copy.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 386px;
      width: 270px;
      margin: auto;
    }
  }
  .joinUs{
      background-image: url('../../public/img/Desktop/xxsj-wbe_aboutus/joinUs.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      height: 586px;
      padding: 50px 80px 0;
      .title{
        font-size:40px;
        margin-bottom:30px;
        font-weight:800;
        letter-spacing:5px;
        text-align: center;
        color: #fff;
      }
      .content{
        color: #fff;
        font-size: 20px;
        letter-spacing: 2px;
        line-height: 36px;
        text-indent: 44px;
      }
      .joinBtn{
        width: 340px;
        height: 70px;
        margin: 120px auto 0;
        border-radius: 15px;
        box-shadow: 3px 3px 10px rgba(254,109,1, .5);
        text-align: center;
        line-height: 70px;
        color: #fff;
        font-size: 24px;
        background-image: linear-gradient(to bottom,#FE6D01,#E89954);
      }
    .joinBtn:hover{
      cursor: pointer;
    }
  }
  .Investment{
    padding: 50px 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title{
      font-size:40px;
      margin-bottom:30px;
      font-weight:800;
      letter-spacing:5px;
      text-align: center;
      color: #333;
    }
    .pinkcard{
      background-color: #E14F60;
      border-radius: 45px;
      box-shadow: 5px 5px 15px #E14F60;
    }
    .content{
      color: #333;
      margin-left: 20px;
      width: 1400px;
      height: 245px;
      padding: 45px;
      .subheading{
        font-size: 26px;
        letter-spacing: 1px;
        line-height: 40px;
      }
      .body{
        font-size: 18px;
        line-height: 40px;
      }
    }
  }
</style>