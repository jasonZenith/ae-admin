<template>
  <div class="history-tab">
    <div class="tab-links" v-for="n in 5">
      <a href="" class="hover:text-white">links</a>
      <i class="fa-solid fa-xmark cursor-pointer"></i>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.history-tab {
  @apply flex gap-1 px-2 border-b;
  .tab-links {
    @apply bg-white mx-1 my-2 py-2 px-3 flex items-center gap-3 shadow-md hover:bg-cyan-700 duration-300 hover:text-white;
  }
}
</style>
