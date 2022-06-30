<template>
  <div>
    <img
      class="head"
      src="../public/img/Desktop/xxsj-wbe_join-us/head.jpg"
      alt=""
    />
    <div
      class="d-flex justify-items-center align-items-center w-100 flex-column"
      style="margin: 60px 0"
    >
      <div class="d-flex">
        <div class="chooseItem text-white" style="background-color: #e14f60">
          工作地点
        </div>
        <div class="chooseItem" style="margin-left: 20px; color: #e14f60">
          成都
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-items-center align-items-center w-100 flex-column"
      style="margin: 90px 0"
    >
      <div class="d-flex">
        <img
          class="slide-right"
          :class="scrollTop > 150 ? 'play' : ''"
          src="../public/img/Desktop/xxsj-wbe_join-us/two-girls.jpg"
          alt=""
          style="width: 761px; height: 521px"
        />
        <div
          class="card slide-left"
          :class="scrollTop > 150 ? 'play' : ''"
          style="margin: 60px 0 0 -240px"
        >
          <div class="title">客服</div>
          <div class="content">
            1、遵循标准服务用语规范和操作规范，受理、解决客户在产品使用过程中遇到的各种问题
          </div>
          <div class="content">
            2、协助进行增值服务操作或受理客户咨询、投诉和建议；
          </div>
          <div class="content">
            3、对于无法当场解决的问题记录工单，或升级处理；
          </div>
          <div class="content">
            4、认真填写相关工作业务表格，详细记录客户信息及问题并及时反馈。
          </div>
          <div class="title">任职要求</div>
          <div class="content">
            1、相关专业大专及以上学历、掌握基本的办公软件操作；
          </div>
          <div class="content">
            2、头脑清楚、思路清晰、反应敏捷，具有较强的沟通能力；
          </div>
          <div class="content">3、性格开朗、乐于助人、善于解压；</div>
          <div class="content">4、有客户服务中心工作经验优先考虑。</div>
          <div class="sendBtn" @click="scrollBottom">
            意向职位，发送个人简历
          </div>
        </div>
      </div>
    </div>
    <div
      class="d-flex justify-items-center align-items-center w-100 flex-column"
      style="margin: 90px 0"
    >
      <div class="d-flex">
        <div
          class="card slide-right"
          :class="scrollTop > 500 ? 'play' : ''"
          style="margin: 60px -240px 0 0"
        >
          <div class="title">产品营销专员</div>
          <div class="content">
            1、参与公司战略目标规划，负责公司各类产品的销售战略制定和发展目标制定；
          </div>
          <div class="content">
            2、积极联系客户，与客户进行有效沟通，了解客户需求；
          </div>
          <div class="content">3、维护老客户的产品业务，挖掘客户的潜力；</div>
          <div class="content">
            4、定期与合作客户进行沟通，建立良好的长期合作关系；
          </div>
          <div class="title">任职要求</div>
          <div class="content">
            1、相关专业中专及以上学历、掌握基本的办公软件操作、接受优秀的迎接毕业生；
          </div>
          <div class="content">
            2、有较强的沟通能力、语言表达能力和团队协作能力；
          </div>
          <div class="content">
            3、对销售工作有较高的热情，能够承受工作压力，自信心强，有挑战高薪的勇气；
          </div>
          <div class="sendBtn" @click="scrollBottom">
            意向职位，发送个人简历
          </div>
        </div>
        <img
          class="slide-left"
          :class="scrollTop > 500 ? 'play' : ''"
          src="../public/img/Desktop/xxsj-wbe_join-us/computer.jpg"
          alt=""
          style="width: 761px; height: 521px"
        />
      </div>
    </div>
    <div
      class="d-flex justify-items-center align-items-center w-100 flex-column"
      style="margin: 90px 0"
    >
      <div class="d-flex">
        <img
          class="slide-right"
          :class="scrollTop > 1200 ? 'play' : ''"
          src="../public/img/Desktop/xxsj-wbe_join-us/book.jpg"
          alt=""
          style="width: 761px; height: 521px"
        />
        <div
          class="card slide-left"
          :class="scrollTop > 1200 ? 'play' : ''"
          style="margin: 60px 0 0 -240px"
        >
          <div class="title">新媒体文案</div>
          <div class="content">
            1、独立运营公司微信公众号，负责微信公众账号的日常运营和维护工作；
          </div>
          <div class="content">
            2、策划微信公众号整套运营方案，及微信公众号活动方案；
          </div>
          <div class="content">3、自媒体内容的筹备和整理，软文撰写；</div>
          <div class="content">
            4、公众号日常数据拉取，通过数据分析对运营方案进行调优；
          </div>
          <div class="title">任职要求</div>
          <div class="content">
            1、大专以上学历，1年以上工作经验，优秀者可放低工作年限；
          </div>
          <div class="content">
            2、有项目管理能力，执行力强，擅长数据分析；文字功底好，策划能力强，思维活跃，视角独特新颖；
          </div>
          <div class="content">
            3、良好的沟通协调能力，工作积极主动，责任心强，具有团队合作；
          </div>
          <div class="content">
            4、新媒体运营、通信运营相关行业从业背景者优先
          </div>
          <div class="sendBtn" @click="scrollBottom">
            意向职位，发送个人简历
          </div>
        </div>
      </div>
    </div>

    <div
      class="connectUs d-flex flex-column align-items-center"
      :style="'background-image:url(' + connectUs + ');'"
    >
      <div class="title">联系我们</div>
      <img src="../public/img/Desktop/xxsj-wbe_join-us/contractUs.png" alt="" />
      <div class="content" style="margin-bottom: 100px">
        专业的资讯为您提供一站式解决方案
      </div>
      <n-grid x-gap="14" :cols="1">
        <n-gi>
          <div
            class="
              d-flex
              flex-column
              text-white
              justify-items-center
              align-items-center
            "
          >
            <div style="font-size: 18px; line-height: 46px">
              你可以通过电话与邮件与我们联系，或者把你的需求提交给我们
            </div>
            <div style="font-size: 26px; line-height: 46px">业务咨询热线：</div>
            <div class="phone-line mt-2">028-82222222</div>
            <div class="phone-line mt-2 mb-2">16505000001</div>
            <div style="font-size: 26px; line-height: 46px">
              四川阿斯赫信息技术有限公司
            </div>
            <div style="font-size: 18px; line-height: 46px">
              总公司：四川阿斯赫信息技术有限公司
            </div>
            <div style="font-size: 18px; line-height: 46px">
              地址：成都市金牛区韦家碾三路207号
            </div>
          </div>
        </n-gi>
        <!-- <n-gi>
                <div style="padding-right:200px;">
                    <div style="font-size: 26px;line-height: 46px;">填写您的个人信息</div>
                    <n-space vertical>
                        <n-input size="large" v-model:value="userInfo.name" clearable type="text" placeholder="姓名" :style="inputStyle"/>
                        <n-input size="large" v-model:value="userInfo.phone" clearable type="text" placeholder="电话" />
                        <n-input size="large" v-model:value="userInfo.QQ" clearable type="text" placeholder="QQ" />
                        <n-input size="large" v-model:value="userInfo.email" clearable type="text" placeholder="邮箱" />
                        <n-input
                            v-model:value="userInfo.question"
                            type="textarea"
                            placeholder="描述您的问题详情"
                            clearable
                            :autosize="{ minRows: 3}"
                        />
                    </n-space>
                    <n-button class="mt-2 w-100" color="#20EBFD" type="info" size="large">提交</n-button>
                </div>
            </n-gi> -->
      </n-grid>
    </div>
  </div>
</template>

<script setup>
import { NGrid, NGi, NSpace, NInput, NButton } from "naive-ui";
import watchScorll from "../hooks/watchScorll";

import { reactive, watch } from "vue";
const inputStyle = {
  borderColor: "#20EBFD",
};
const userInfo = reactive({
  name: "",
  phone: "",
  QQ: "",
  email: "",
  question: "",
});

const scrollTop = watchScorll();
watch(
  () => scrollTop.value,
  (newVal) => {
    console.log(newVal);
  }
);

//滚动到底
function scrollBottom() {
  window.scrollTo({
    top: 6000,
    behavior: "smooth",
  });
}
const connectUs = new URL(
  "../public/img/Desktop/xxsj-wbe_join-us/connectUs.jpg",
  import.meta.url
).href;
</script>

<style lang="scss">
.head {
  width: 100vw;
  height: 487px;
  vertical-align: top;
}

.chooseItem {
  border: #e14f60 solid 2px;
  padding: 10px 5px;
  font-size: 35px;
  line-height: 40px;
  text-align: center;
  min-width: 175px;
  letter-spacing: 5px;
  font-family: ZhenyanGB;
}

.card {
  width: 610px;
  height: 520px;
  box-shadow: 2px 2px 15px #333;
  z-index: 4;
  background-color: #fff;
  padding: 35px 80px;
  color: #333;
  display: flex;
  flex-direction: column;
  .title {
    line-height: 40px;
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 0;
  }
  .content {
    font-size: 20px;
  }
}

.sendBtn {
  width: 260px;
  height: 60px;
  background: #e14f60;
  box-shadow: 0px 4px 13px 0px rgba(246, 48, 48, 0.4);
  border-radius: 10px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  line-height: 60px;
  margin-left: auto;
  margin-top: auto;
  transition: all 1s ease 0s;
}

.sendBtn:hover {
  cursor: pointer;
  box-shadow: 10px 10px 13px 0px rgba(246, 48, 48, 0.4);
}

.connectUs {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 742px;
  padding: 60px 280px;
  color: #fff;
  .title {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }
  .content {
    font-size: 20px;
    line-height: 50px;
    text-align: center;
  }
}

.phone-line {
  width: 249px;
  height: 50px;
  background: #20ebfd;
  border-radius: 6px;
  font-size: 26px;
  color: #ffffff;
  line-height: 50px;
  text-align: center;
}

.phone-line:hover {
  cursor: pointer;
}
</style>