<template>
  <div class="admin-navbar">
    <a-breadcrumb>
      <a-breadcrumb-item>Dashboard</a-breadcrumb-item>
      <a-breadcrumb-item>分析页</a-breadcrumb-item>
    </a-breadcrumb>
    <div class="logo relative group">
      <img src="/imgs/zjcat.jpg" alt="zjcat" />
      <span>JasonZeng</span>
      <ul class="avatar-links group-hover:block">
        <li><a href="">文档中心</a></li>
        <li><a href="">回到首页</a></li>
        <li><a href="">退出登录</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

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
