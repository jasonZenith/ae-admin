<template>
  <div class="admin-cards md:flex-row flex-col">
    <a-card
      :title="card.title"
      :hoverable="true"
      :bordered="true"
      class="flex-1"
      v-for="card in cards"
      :key="card.id"
    >
      <template #extra>
        <a-tag :color="card.color">{{ card.color }}</a-tag>
      </template>
      <section>
        <div class="text-2xl text-gray-500">{{ card.price }}</div>
        <!-- <p class="text-[#50d71e]">1</p> -->
        <div :style="`color:${card.color}`">
          <i :class="card.priceIcon" class="text-2xl"></i>
        </div>
      </section>
      <section class="mt-5">
        <div>
          <span class="text-sm">{{ card.total }}</span>
        </div>
        <div>{{ card.totalNum }}</div>
      </section>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { cards } from "./userData";
</script>

<style lang="scss">
.admin-cards {
  @apply flex gap-4;

  section {
    @apply flex justify-between items-center;
  }
}
</style>
