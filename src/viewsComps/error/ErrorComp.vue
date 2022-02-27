<template>
  <div class="bg-gray-100 h-2/3 flex flex-col justify-center">
    <VoidError :errorTitle="errorTitle" class="mt-16 h-2/3 mx-auto" />
    <div class="mt-8 mx-auto">
      <router-link
        to="/admin/user"
        class="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
        >返回分析页
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import VoidError from "./VoidError.vue";
const props = defineProps({
  errorTitle: String,
});
</script>

<style lang="scss">
.emoji-403 {
  position: relative;
  animation: mymove 2.5s infinite;
}

@keyframes mymove {
  33% {
    top: 0px;
  }
  66% {
    top: 20px;
  }
  100% {
    top: 0px;
  }
}
</style>
