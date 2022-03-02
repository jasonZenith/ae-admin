<template>
  <div class="flex justify-between m-9">
    <AeLink href="/" title="网站首页" />
    <AeLink
      href="https://github.com/JasonZ227/ae-admin"
      target="_blank"
      title="文档中心"
    />
    <AeLink
      href="https://jasonzeng.vercel.app"
      target="_blank"
      title="个人网站"
    />
  </div>
</template>

<script setup lang="ts">
import AeLink from "@/components/alink/AeLink.vue";
</script>
