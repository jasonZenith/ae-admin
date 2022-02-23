<template>
  <footer class="footer-comp">
    <a href="https://github.com/JasonZ227" target="_blank">GitHub</a>
    <a href="https://jasonzeng.vercel.app/" target="_blank">个人网站</a>
    <a href="mailto:Jasonz227@163.com" target="_blank">Email</a>
    <a href="https://blog.csdn.net/JasonZ227" target="_blank">Blog</a>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer-comp {
  height: 5rem;
  background-image: linear-gradient(to right, #868f96 0%, #596164 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  a {
    color: #eee;
    font-size: 0.8rem;

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
