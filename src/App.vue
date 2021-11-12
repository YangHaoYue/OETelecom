<template>
  <n-layout>
      <n-layout-header>
        <div class="top_nav">
          <n-config-provider :theme="darkTheme" >
            <n-space justify="end">
              <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
            </n-space>
          </n-config-provider>
        </div>
      </n-layout-header>
      <n-layout-content>
        <div style="height:80px;"></div>
        <router-view/>
      </n-layout-content>
      <n-layout-footer>
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
                    <img src="./public/img/Desktop/xxsj-wbe_home/case.png" style="width:80px;height:80px;object-fit: cover;">
                    <div style="line-height: 1.4;font-size:18px;margin-top:5px;">APP下载</div>
                </div>
            </n-gi>
            <n-gi :span="1" :offset="1">
                <div class="d-flex flex-column align-items-center">
                    <img src="./public/img/Desktop/xxsj-wbe_home/case.png" style="width:80px;height:80px;object-fit: cover;">
                    <div style="line-height: 1.4;font-size:18px;margin-top:5px;">关注公众号</div>
                </div>
            </n-gi>
        </n-grid>
    </div>
      </n-layout-footer>
    </n-layout>
  <div>
    
  </div>
</template>

<script setup>
import { resolveComponent , h, ref } from 'vue'
import { NIcon,NMenu,NSpace,NConfigProvider,darkTheme,NLayout,NLayoutContent,NLayoutHeader,NLayoutFooter,NGrid,NGi} from 'naive-ui'
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from '@vicons/ionicons5'

let activeKey = ref(0)
console.log(activeKey.value)

function renderIcon (icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions = [
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/'
        },
        { default: () => '首页' }
      ),
    key: 'go-back-home',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/'
        },
        { default: () => '产品中心' }
      ),
    key: 'go-center',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/'
        },
        { default: () => '新闻资讯' }
      ),
    key: 'go-news',
    icon: renderIcon(BookIcon)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/about'
        },
        { default: () => '关于我们' }
      ),
    key: 'go-about',
    icon: renderIcon(PersonIcon)
  },
  {
    label: () =>
      h(
        resolveComponent('router-link'),
        {
          to: '/'
        },
        { default: () => '加入我们' }
      ),
    key: 'join-us',
    icon: renderIcon(WineIcon)
  }
]
</script>

<style>
.top_nav{
    width: 96vw;
    background-color: rgb(7, 23, 72);
    position: fixed;
    z-index: 9;
    padding:20px 40px;
 }
  .footer{
     background-color: #E14F60;
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