<template>
  <aside class="menu">
    <div class="logo mb-10">
      <i class="fab fa-battle-net"></i>
      <span class="text-2xl">ae-admin</span>
    </div>
    <dl v-for="menu in menus">
      <dt @click="clickMenu(menu)">
        <section><i :class="menu.icon"></i> {{ menu.title }}</section>
        <section>
          <i v-if="menu.active" class="fa-solid fa-angle-up"></i>
          <i v-else class="fa-solid fa-angle-down"></i>
        </section>
      </dt>
      <dd
        v-if="menu.active"
        @click="clickMenuItem(menuItem)"
        :class="{ active: menuItem.active }"
        v-for="menuItem in menu.children"
      >
        {{ menuItem.title }}
      </dd>
    </dl>
  </aside>
</template>

<script setup lang="ts">
import { menus, Menu, MenuItem } from "./data";

const clickMenu = (menu: Menu) => {
  menus.forEach((item) => {
    if (item !== menu) {
      item.active = false;
    }
  });
  menu.active = Boolean(!menu.active);
};

const clickMenuItem = (menuItem: MenuItem) => {
  menus.forEach((menu) => {
    menu.children?.forEach((menuItem) => {
      menuItem.active = false;
    });
  });
  menuItem.active = true;
};
</script>

<style lang="scss" scoped>
.menu {
  @apply h-screen w-[260px] bg-gray-800 p-3 text-gray-100;

  .logo {
    @apply text-2xl flex items-center gap-3;
  }

  dl {
    @apply mt-5 cursor-pointer;
    dt {
      @apply my-3 flex gap-4 items-center justify-around;
      section {
        @apply flex items-center gap-3;
      }
    }
    dd {
      @apply m-4 ml-6 hover:bg-cyan-700 duration-300 rounded-md py-2 px-3;
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
