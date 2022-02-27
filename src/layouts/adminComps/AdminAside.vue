<template>
  <aside class="menu">
    <div class="logo mb-10">
      <i class="fab fa-battle-net"></i>
      <span class="text-2xl">ae-admin</span>
    </div>
    <dl v-for="(menu, index) in menus" :key="index">
      <!-- <dt @click="clickMenu(menu)"> -->
      <dt @click="clickMenu(menu)">
        <section><i :class="menu.meta.icon"></i> {{ menu.meta.title }}</section>
        <section>
          <i
            class="fa-solid fa-angle-down duration-300"
            :class="{ 'rotate-180': menu.meta.isClick }"
          ></i>
        </section>
      </dt>
      <!-- @click="clickMenuItem(menuItem)" -->
      <dd
        v-if="menu.meta.isClick"
        :class="{ active: menuItem.meta?.isClick }"
        v-for="(menuItem, index) in menu.children"
        :key="index"
        @click="clickMenuItem(menuItem)"
      >
        {{ menuItem.meta?.title }}
      </dd>
    </dl>
  </aside>
</template>

<script setup lang="ts">
import { routerStore } from "@/store";
import { RouteRecordNormalized, RouteRecordRaw, useRouter } from "vue-router";
// import { menus, Menu, MenuItem } from "./data";
const stores = routerStore();
const menus = stores.routes;
const menuItemSelect = useRouter();

const clickMenu = (menu: RouteRecordNormalized) => {
  menus.forEach((item) => {
    if (item !== menu) {
      item.meta.isClick = false;
    }
  });
  menu.meta.isClick = Boolean(!menu.meta.isClick);
};

const clickMenuItem = (menuItem: RouteRecordRaw) => {
  menus.forEach((menu) => {
    menu.children?.forEach((menuItem) => {
      menuItem.meta!.isClick = false;
    });
  });
  menuItem.meta!.isClick = true;
  menuItemSelect.push(menuItem);
};
</script>

<style lang="scss" scoped>
.menu {
  @apply min-h-screen w-[260px] min-w-[200px] bg-gray-800 p-3 text-gray-100;

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
