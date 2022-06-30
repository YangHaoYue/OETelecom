<template>
  <n-layout>
    <n-layout-header>
      <div class="top_nav d-flex justify-items-end">
        <n-config-provider :theme="darkTheme">
          <n-space justify="end">
            <n-menu
              v-model:value="activeKey"
              mode="horizontal"
              :options="menuOptions"
            />
          </n-space>
        </n-config-provider>
        <div
          class="d-flex align-items-center"
          style="margin-right: 100px; margin-left: 50px"
        >
          <img
            style="width: 16px; height: 16px; margin-right: 5px"
            src="./public/img/phone.png"
            alt=""
          />
          <div
            class="text-white"
            style="font-size: 24px; cursor: pointer; font-style: italic"
          >
            028-82222222
          </div>
        </div>
      </div>
    </n-layout-header>
    <n-layout-content>
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-layout-content>
    <n-layout-footer>
      <div class="footer d-flex align-items-start text-white">
        <div style="width: 750px">
          <div
            style="
              font-size: 40px;
              letter-spacing: 21px;
              font-family: ZhenyanGB;
            "
          >
            全国统一售后热线
          </div>
          <div
            style="
              font-size: 60px;
              font-family: ZhenyanGB;
              margin-top: 5px;
              line-height: 1;
              letter-spacing: 5.5px;
            "
          >
            028-82222222
          </div>
        </div>
        <div
          style="
            background-color: #fff;
            width: 20px;
            height: 51px;
            margin-top: 8px;
          "
        ></div>
        <n-grid :cols="24">
          <n-gi :span="2" :offset="2">
            <div style="line-height: 1.4; font-size: 20px; cursor: pointer">
              产品中心
            </div>
            <div
              class="mt-2"
              style="line-height: 1.6; font-size: 16px; cursor: pointer"
            >
              最新产品
            </div>
            <div style="line-height: 1.6; font-size: 16px; cursor: pointer">
              实时资讯
            </div>
          </n-gi>
          <n-gi :span="2" :offset="2">
            <div style="line-height: 1.4; font-size: 20px; cursor: pointer">
              商务中心
            </div>
            <div
              class="mt-2"
              style="line-height: 1.6; font-size: 16px; cursor: pointer"
            >
              合作加盟
            </div>
            <div style="line-height: 1.6; font-size: 16px; cursor: pointer">
              售后服务
            </div>
          </n-gi>
          <n-gi :span="2" :offset="2">
            <div style="line-height: 1.4; font-size: 20px; cursor: pointer">
              呼叫中心
            </div>
            <div
              class="mt-2"
              style="line-height: 1.6; font-size: 16px; cursor: pointer"
            >
              在线客服
            </div>
            <div style="line-height: 1.6; font-size: 16px; cursor: pointer">
              400电话
            </div>
          </n-gi>
          <n-gi :span="2" :offset="3">
            <div class="d-flex flex-column align-items-center">
              <img
                src="./public/img/android.png"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <div style="line-height: 1.4; font-size: 18px; margin-top: 5px">
                Anrdroid
              </div>
            </div>
          </n-gi>
          <n-gi :span="2" :offset="1">
            <div class="d-flex flex-column align-items-center">
              <img
                src="./public/img/ios.png"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <div style="line-height: 1.4; font-size: 18px; margin-top: 5px">
                Ios
              </div>
            </div>
          </n-gi>
          <n-gi :span="2" :offset="1">
            <div class="d-flex flex-column align-items-center">
              <img
                src="./public/img/wechart.png"
                style="width: 80px; height: 80px; object-fit: cover"
              />
              <div
                style="
                  line-height: 1.4;
                  font-size: 18px;
                  margin-top: 5px;
                  white-space: nowrap;
                "
              >
                关注公众号
              </div>
            </div>
          </n-gi>
        </n-grid>
      </div>
      <div
        class="d-flex justify-items-center text-white"
        style="height: 20px; background-color: #333; padding: 5px 0"
      >
        蜀ICP备2021027769号
      </div>
    </n-layout-footer>
  </n-layout>
</template>

<script>
import banner1 from "/src/public/img/Desktop/xxsj-wbe_home/banner1.png";
import banner2 from "/src/public/img/Desktop/xxsj-wbe_home/banner2.png";
import banner3 from "/src/public/img/Desktop/xxsj-wbe_home/banner3.png";
export default {
  beforeCreate() {
    let count = 0;
    let imgs = [
      //用require的方式添加图片地址，直接添加图片地址的话，在build打包之后会查找不到图片，因为打包之后的图片名称会有一个加密的字符串
      banner1,
      banner2,
      banner3,
    ];
    for (let img of imgs) {
      let image = new Image();
      image.src = img;
      image.onload = () => {
        count++;
      };
    }
  },
};
</script>

<script setup>
import { resolveComponent, h, ref } from "vue";
import {
  NIcon,
  NMenu,
  NSpace,
  NConfigProvider,
  darkTheme,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutFooter,
  NGrid,
  NGi,
  NMessageProvider,
} from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
  HomeOutline as HomeOutLine,
  IdCardOutline as IdCardOutLine,
} from "@vicons/ionicons5";

let activeKey = ref(1);

function renderIcon(icon) {
  return () =>
    h(NIcon, null, {
      default: () => h(icon),
    });
}

const menuOptions = [
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: "/",
        },
        {
          default: () => "首页",
        }
      ),
    key: "go-back-home",
    icon: renderIcon(HomeOutLine),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: "/products",
        },
        {
          default: () => "产品中心",
        }
      ),
    key: "go-center",
    icon: renderIcon(IdCardOutLine),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: "/news",
        },
        {
          default: () => "新闻资讯",
        }
      ),
    key: "go-news",
    icon: renderIcon(BookIcon),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: "/about",
        },
        {
          default: () => "关于我们",
        }
      ),
    key: "go-about",
    icon: renderIcon(PersonIcon),
  },
  {
    label: () =>
      h(
        resolveComponent("router-link"),
        {
          to: "/joinus",
        },
        {
          default: () => "加入我们",
        }
      ),
    key: "join-us",
    icon: renderIcon(WineIcon),
  },
];
</script>

<style>
.top_nav {
  width: 96vw;
  background-color: rgb(5, 5, 5);
  opacity: 0.8;
  position: fixed;
  z-index: 9;
  padding: 20px 40px;
}

.footer {
  background-color: #e14f60;
  height: 160px;
  padding: 50px;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}

::-webkit-scrollbar-track {
  background: #f6f6f6;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #aaa;
  border-radius: 2px;
}

::-webkit-scrollbar-thumb:hover {
  background: #747474;
}

::-webkit-scrollbar-corner {
  background: #f6f6f6;
}
</style>