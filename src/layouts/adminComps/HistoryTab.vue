<template>
  <div class="history-tab">
    <div class="tab-link" v-for="n in 5">
      <a href="">links</a>
      <i class="fa-solid fa-xmark"></i>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.history-tab {
  @apply flex gap-1;
  .tab-link {
    @apply bg-white py-2 px-3 m-2 flex items-center gap-3;
  }
}
</style>
