<template>
  <div class="admin-navbar">
    <span class="cursor-pointer absolute py-6" @click="fullMenu = !fullMenu">
      <i class="fas fa-angle-left mx-3 -translate-x-3" :class="fullMenu ? '' : 'fa-angle-right'"></i>
    </span>
    <a-breadcrumb class="translate-x-8">
      <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
      <a-breadcrumb-item>分析页</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="flex items-center">
      <Tooltip :title="getTitle" placement="bottom" :mouseEnterDelay="0.5" class="mr-4 hover:opacity-60">
        <span @click="toggle">
          <FullscreenOutlined v-if="!isFullscreen" />
          <FullscreenExitOutlined v-else />
        </span>
      </Tooltip>

      <div class="logo relative group">
        <img :src="userInfo.avatar" alt="用户头像" />
        <span>{{ userInfo.name }}</span>
        <ul class="avatar-links group-hover:block">
          <li>
            <a href="https://github.com/JasonZ227/ae-admin" target="_blank">文档中心</a>
          </li>
          <li><router-link to="/">回到首页</router-link></li>
          <li>
            <router-link to="/login" @click="removeToken">退出登录</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CacheEnum } from "@/enums/cacheEnum"
import { Tooltip } from "ant-design-vue"
import { apiUserStore, menuStore } from "@/store"
import { reactive, computed, unref } from "vue"
import { fullMenu } from "@/composables/useFullMenu"
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons-vue"
import { useFullscreen } from "@vueuse/core"

const { toggle, isFullscreen } = useFullscreen()
const getTitle = computed(() => {
  return unref(isFullscreen) ? "退出全屏" : "全屏"
})
const menus = menuStore()
const menu = menus.menuInit()
menu.forEach(menuItem => {
  const title = menuItem.meta.title
})

let info = apiUserStore().info
const userInfo = reactive({
  name: info?.name,
  avatar: info?.avatar,
})

const removeToken = () => {
  localStorage.removeItem(CacheEnum.TOKEN_NAME)
}
</script>

<style lang="scss">
.admin-navbar {
  @apply bg-white py-3 px-6 flex justify-between items-center  cursor-pointer;

  .logo {
    @apply flex gap-2 items-center;

    img {
      @apply w-8 h-8 rounded-full object-cover;
    }

    .avatar-links {
      @apply absolute translate-y-[80px]  translate-x-3 bg-white p-2 hidden z-50 rounded-lg shadow-md;

      li {
        @apply p-2 border-t border-gray-200;
      }
    }
  }
}
</style>
