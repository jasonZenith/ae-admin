<template>
  <aside class="menu" :class="fullMenu ? 'w-[260px] min-w-[200px]' : 'w-[60px]'">
    <div class="logo mb-10 mt-1">
      <i class="fab fa-battle-net"></i>
      <template v-if="fullMenu">
        <span class="text-2xl">ae-admin</span>
      </template>
    </div>
    <dl v-for="(menu, index) in menus" :key="index">
      <dt @click="clickMenu(menu)">
        <section><i :class="menu.meta.icon"></i> {{ fullMenu ? menu.meta.title : "" }}</section>
        <section v-if="fullMenu">
          <i class="fa-solid fa-angle-down duration-300" :class="{ 'rotate-180': menu.meta.isClick }"></i>
        </section>
      </dt>
      <!-- @click="clickMenuItem(menuItem)" -->
      <template v-if="menu.meta.isClick && fullMenu">
        <dd
          :class="{ active: menuItem.meta?.isClick }"
          v-for="(menuItem, index) in menu.children"
          :key="index"
          @click="clickMenuItem(menuItem)"
        >
          {{ menuItem.meta?.title }}
        </dd>
      </template>
    </dl>
  </aside>
</template>

<script setup lang="ts">
import { router } from "@/router"
import { menuStore } from "@/store"
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from "vue-router"
import { fullMenu } from "@/composables/useFullMenu"

const stores = menuStore()
const menus = stores.menuInit()

const clickMenu = (menu: RouteRecordNormalized) => {
  menus.forEach(item => {
    item.meta.isClick = false
  })
  menu.meta.isClick = Boolean(!menu.meta.isClick)
}

const clickMenuItem = (menuItem: RouteRecordRaw) => {
  menus.forEach(menu => {
    menu.children?.forEach(cmenu => {
      cmenu.meta!.isClick = false
    })
  })
  menuItem.meta!.isClick = true
  router.push(menuItem)
}
</script>

<style lang="scss" scoped>
.menu {
  @apply min-h-screen  bg-gray-800 p-3 text-gray-100 duration-300;

  .logo {
    @apply text-2xl flex items-center gap-3;
  }

  dl {
    @apply mt-5 cursor-pointer;
    dt {
      @apply my-3 p-2 flex gap-4 items-center justify-between;

      section {
        @apply flex items-center gap-3;
      }
    }
    dd {
      @apply m-4 ml-6 bg-gray-700 hover:bg-cyan-700 duration-300 rounded-md py-2 px-3;
    }
    .active {
      @apply bg-cyan-700;
    }
  }
}

i {
  @apply text-blue-300;
}
</style>
