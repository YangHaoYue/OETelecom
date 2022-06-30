<template>
  <div>
    <div class="head" :style="'background-image:url(' + headImg + ');'"></div>
    <div class="top-nav">
      <div
        class="d-flex align-items-center justify-items-around w-100"
        style="padding-top: 20px"
      >
        <div class="border-right flex-1" style="cursor: pointer">公司新闻</div>
        <div class="border-right flex-1" style="cursor: pointer">行业新闻</div>
        <div class="flex-1" style="cursor: pointer">公告</div>
      </div>
      <div class="line"></div>
    </div>

    <div class="companyNews" style="">
      <div class="title">公司新闻</div>
      <div class="content">Company News</div>
      <div
        class="d-flex justify-items-center align-items-center"
        style="margin-top: 40px"
      >
        <div class="newsCard">
          <div class="d-flex justify-items-between">
            <div class="title">“电小牛”系统上线</div>
            <div class="d-flex">
              <div style="font-size: 20px">01-12-2021</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="content mt-2">
            稳定的外呼系统，一键外呼，加强过滤骚扰拦截，高强防封。同时配备完善的CRM客户管理系统，各功能齐全，有效提升电销效率及客户转化率，现强势推出购卡免费版.
          </div>
        </div>
        <div class="newsCard">
          <div class="d-flex justify-items-between">
            <div class="title">快速掌握一手讯息</div>
            <div class="d-flex">
              <div style="font-size: 20px">01-12-2021</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="content mt-2">
            我司品宣现已实现互联网各平台全覆盖，公众号（ID：四川阿斯赫有限公司）、抖音、快手（同ID：虚商世纪电销卡）皆可关注，查询实时最新一手套餐讯息及行业咨询，欢迎关注！
          </div>
        </div>
        <div class="newsCard">
          <div class="d-flex justify-items-between">
            <div class="title">多渠道购卡,及时所享</div>
            <div class="d-flex">
              <div style="font-size: 20px">01-12-2021</div>
              <div class="icon"></div>
            </div>
          </div>
          <div class="content mt-2">
            我司现有卡餐已同步上线淘宝店铺（ID:kaner通讯），您可直接在线下单，同时也可直接联系网站电话，我们随时欢迎您的来电！
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-items-center">
        <n-button
          size="large"
          style="margin: 40px 0; width: 450px"
          color="#F26F7E"
          text-color="#fff"
          >查看更多</n-button
        >
      </div>
    </div>

    <div class="industry" :style="'background-image:url(' + industryImg + ');'">
      <div class="title">行业新闻</div>
      <div class="content" style="margin-bottom: 40px">Trade News</div>
      <div class="d-flex flex-column">
        <div
          class="line-card slide-right"
          :class="scrollTop > 500 ? 'play' : ''"
          style="animation-delay: 0.2s"
        >
          <div class="time">
            <div class="day">10</div>
            <div class="date">2021-10</div>
          </div>
          <div class="body">
            <div class="mb-2 litteTitle">
              工信部：加强全国移动电话卡“一证通查”服务保障工作
            </div>
            <div class="mt-2 litteContent">
              为进一步提升全国移动电话卡“一证通查”服务质量和水平，及时回应广大用户关切，身份验证不合规等突出...
            </div>
            <div
              style="
                margin-top: 5px;
                color: #fcff00;
                font-size: 14px;
                text-align: right;
                cursor: pointer;
              "
            >
              详情>>
            </div>
          </div>
        </div>
        <div
          class="line-card slide-right"
          :class="scrollTop > 500 ? 'play' : ''"
          style="animation-delay: 0.4s"
        >
          <div class="time">
            <div class="day">09</div>
            <div class="date">2021-09</div>
          </div>
          <div class="body">
            <div class="mb-2 litteTitle">
              通信管理局召开信息通信行业防范治理电信网络诈骗工作会议
            </div>
            <div class="mt-2 litteContent">
              北京市通信管理局会同市公安局刑侦总队立即组织3家基础电信企业、12家移动转售企业和6家互联网企业...
            </div>
            <div
              style="
                margin-top: 5px;
                color: #fcff00;
                font-size: 14px;
                text-align: right;
                cursor: pointer;
              "
            >
              详情>>
            </div>
          </div>
        </div>
        <div
          class="line-card slide-right"
          :class="scrollTop > 500 ? 'play' : ''"
          style="animation-delay: 0.6s"
        >
          <div class="time">
            <div class="day">06</div>
            <div class="date">2021-07</div>
          </div>
          <div class="body">
            <div class="mb-2 litteTitle">
              工业和信息化部扎实部署推进"断卡行动"
            </div>
            <div class="mt-2 litteContent">
              工业和信息化部近期联合公安部发布了《关于依法清理整治涉诈电话卡、物联网卡以及关联互联网账号的通...
            </div>
            <div
              style="
                margin-top: 5px;
                color: #fcff00;
                font-size: 14px;
                text-align: right;
                cursor: pointer;
              "
            >
              详情>>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-items-center">
        <n-button
          size="large"
          style="margin: 40px 0; width: 450px"
          color="#F26F7E"
          text-color="#fff"
          >更多行业新闻</n-button
        >
      </div>
    </div>

    <div class="notice">
      <div class="title">公告</div>
      <div class="content">ANNOUNCEMENT</div>
      <div
        class="d-flex justify-items-center align-items-center"
        style="margin-top: 40px"
      >
        <div class="newsCard">
          <div class="d-flex justify-items-between align-items-end">
            <div class="icon"></div>
            <div class="d-flex flex-column" style="text-align: right">
              <div class="title">虚商世纪公告</div>
              <div class="time">01-12-2021</div>
            </div>
          </div>
          <div class="content">
            请各位代理商都进入各相应通知的企业微信群，之后将统一在企业微信群内进行统一业务及售后服务，不再单独解疑，感谢配合！
          </div>
          <div class="detailBtn">查看详情</div>
        </div>
        <div class="newsCard">
          <div class="d-flex justify-items-between align-items-end">
            <div class="icon"></div>
            <div class="d-flex flex-column" style="text-align: right">
              <div class="title">虚商世纪公告</div>
              <div class="time">01-12-2021</div>
            </div>
          </div>
          <div class="content">
            请各位代理商都进入各相应通知的企业微信群，之后将统一在企业微信群内进行统一业务及售后服务，不再单独解疑，感谢配合！
          </div>
          <div class="detailBtn">查看详情</div>
        </div>
        <div class="newsCard">
          <div class="d-flex justify-items-between align-items-end">
            <div class="icon"></div>
            <div class="d-flex flex-column" style="text-align: right">
              <div class="title">虚商世纪公告</div>
              <div class="time">01-12-2021</div>
            </div>
          </div>
          <div class="content">
            请各位代理商都进入各相应通知的企业微信群，之后将统一在企业微信群内进行统一业务及售后服务，不再单独解疑，感谢配合！
          </div>
          <div class="detailBtn">查看详情</div>
        </div>
      </div>
      <div class="d-flex align-items-center justify-items-center">
        <n-button
          size="large"
          style="margin: 40px 0; width: 450px"
          color="#F26F7E"
          text-color="#fff"
          >更多公告</n-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { NButton } from "naive-ui";
import watchScorll from "../hooks/watchScorll";

const scrollTop = watchScorll();
const headImg = new URL(
  "../public/img/Desktop/xxsj-wbe_information/head.jpg",
  import.meta.url
).href;
const industryImg = new URL(
  "../public/img/Desktop/xxsj-wbe_information/industry.jpg",
  import.meta.url
).href;
</script>

<style scoped lang="scss">
.head {
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 474px;
}
.top-nav {
  margin: -60px auto 0;
  border-radius: 8px;
  box-shadow: 3px 3px 5px #fc7a89;
  width: 800px;
  height: 112px;
  background: linear-gradient(to bottom, #fc7a89, #e55566);
  font-size: 36px;
  text-align: center;
  letter-spacing: 10px;
  line-height: 60px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #fff;
  margin-top: 20px;
}
.companyNews {
  margin-top: 90px;
  .title {
    color: #333;
    font-size: 40px;
    text-align: center;
    line-height: 50px;
    font-family: ZhenyanGB;
  }
  .content {
    font-size: 18px;
    text-align: center;
    color: #31345a;
  }
  .newsCard {
    width: 304px;
    height: 202px;
    background: #ffffff;
    box-shadow: 0px 0px 14px 0px rgba(182, 182, 182, 0.43);
    border-radius: 5px;
    margin: 0 20px;
    padding: 41px 34px 39px 36px;
    color: #333;
    .title {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 30px;
      margin-right: auto;
    }
    .icon {
      width: 50px;
      height: 61px;
      background-image: url("../public/img/Desktop/xxsj-wbe_information/” copy.png");
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left: 10px;
    }
    .content {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 24px;
      text-align: left;
    }
  }
  .newsCard:hover {
    background: linear-gradient(to bottom, #ff7f8e, #e14f60);
    color: #fff;
    .title {
      color: #fff;
    }
    .icon {
      width: 50px;
      height: 61px;
      background-image: url("../public/img/Desktop/xxsj-wbe_information/”.png");
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left: 10px;
    }
    .content {
      color: #fff;
    }
  }
}
.industry {
  background-size: 100% 100%;
  height: 600px;
  color: #fff;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  .title {
    font-size: 40px;
    text-align: center;
    line-height: 50px;
    font-family: ZhenyanGB;
  }
  .content {
    font-size: 18px;
    text-align: center;
  }
  .line-card {
    min-width: 900px;
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .time {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #fff;
      min-width: 100px;
      min-height: 100px;
      border-radius: 6px;
      text-align: center;
      margin-right: 45px;
      .day {
        font-size: 58px;
        font-weight: 600;
        color: #f26f7e;
        line-height: 62px;
      }
      .date {
        font-size: 16px;
        font-weight: 500;
        color: #f26f7e;
      }
    }
    .body {
      color: #fff;
      .litteTitle {
        font-size: 20px;
        letter-spacing: 2px;
      }
      .litteContent {
        font-size: 16px;
        letter-spacing: 2px;
      }
    }
  }
}
.notice {
  margin-top: 90px;
  .title {
    color: #333;
    font-size: 40px;
    text-align: center;
    line-height: 50px;
    font-family: ZhenyanGB;
  }
  .content {
    font-size: 18px;
    text-align: center;
    color: #333;
  }
  .newsCard {
    transition: all 0.5s ease 0s;
    width: 302px;
    min-height: 326px;
    background: #ffffff;
    box-shadow: 0px 0px 14px 0px rgba(182, 182, 182, 0.43);
    border-radius: 5px;
    margin: 0 30px;
    padding: 41px 34px 39px 36px;
    color: #333;
    .title {
      font-size: 24px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 30px;
      margin-right: auto;
    }
    .time {
      font-size: 20px;
    }
    .icon {
      width: 80px;
      height: 80px;
      background-image: url("../public/img/Desktop/xxsj-wbe_information/circle-fill.png");
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left: 10px;
    }
    .content {
      font-size: 18px;
      font-weight: 400;
      letter-spacing: 2px;
      line-height: 24px;
      text-align: left;
      margin-top: 10px;
    }
    .detailBtn {
      margin-top: 20px;
      width: 108px;
      height: 35px;
      border: 1px solid #d93b6d;
      border-radius: 3px;

      line-height: 35px;
      font-size: 16px;
      text-align: center;
      color: #d93b6d;
    }
    .detailBtn:hover {
      cursor: pointer;
    }
  }
  .newsCard:hover {
    transform: scale(1.15);
    transition: all 0.4s ease 0s;
    -webkit-transform: scale(1.06);
    background: linear-gradient(to bottom, #ff7f8e, #e14f60);
    color: #fff;
    .title {
      color: #fff;
    }
    .time {
      color: #fff;
    }
    .icon {
      background-image: url("../public/img/Desktop/xxsj-wbe_information/circle.png");
      background-repeat: no-repeat;
      background-size: 100%;
      margin-left: 10px;
    }
    .content {
      color: #fff;
    }
    .detailBtn {
      border-color: #fff;
      background-color: #fff;
    }
  }
}
</style>