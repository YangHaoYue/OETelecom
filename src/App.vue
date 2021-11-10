<template>
  <div ref="container">
    <div class="top_nav">
      <n-config-provider :theme="darkTheme" >
        <n-space justify="end">
          <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
        </n-space>
      </n-config-provider>
    </div>
    <div style="height:80px;">

    </div>
    <router-view/>
  </div>
</template>

<script setup>
import { resolveComponent , h, ref } from 'vue'
import { NIcon , NMenu , NSpace , NConfigProvider , darkTheme ,NAffix} from 'naive-ui'
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