<template>
  <footer class="footer-comp">
    <a href="https://github.com/JasonZ227" target="_blank">
      <i class="fab fa-github" /> GitHub
    </a>
    <a href="https://jasonzeng.vercel.app/" target="_blank">
      <i class="fas fa-user" />个人网站
    </a>
    <a href="mailto:Jasonz227@163.com" target="_blank">
      <i class="fas fa-envelope"></i>
      Email
    </a>
    <a href="https://blog.csdn.net/JasonZ227" target="_blank">
      <i class="fas fa-blog"></i>
      博客
    </a>
  </footer>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.footer-comp {
  height: 5rem;
  background: #24292f;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  a {
    color: #eee;
    font-size: 0.8rem;

    i {
      margin-right: 0.3rem;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
