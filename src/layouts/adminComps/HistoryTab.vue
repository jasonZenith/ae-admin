<template>
  <div class="history-tab">
    <div
      class="tab-links"
      :class="{ active: $route.name === historyTab.name }"
      v-for="historyTab in historyTabs"
    >
      <router-link :to="{ name: historyTab.name }" class="hover:text-white">{{
        historyTab.title
      }}</router-link>
      <i class="fa-solid fa-xmark cursor-pointer"></i>
    </div>
  </div>
</template>

<script setup lang="ts">
import { historyTabStore } from "@/store";

const historyTabs = historyTabStore().historyTabs;
</script>

<style lang="scss">
.history-tab {
  @apply flex gap-1 px-2 border-b;
  .tab-links {
    @apply bg-white mx-1 my-2 py-2 px-3 flex items-center gap-3 shadow-md hover:bg-cyan-700 duration-300 hover:text-white;
  }
  .active {
    @apply bg-cyan-700 text-white;
  }
}
</style>
