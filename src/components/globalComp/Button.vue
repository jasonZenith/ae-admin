<template>
  <button class="glob-button">{{ props.content }}</button>
</template>

<script setup lang="ts">
const props = defineProps({
  content: String,
});
</script>

<style lang="scss" scoped>
.glob-button {
  color: #fff;
  background-color: #1e40af;
  border-radius: 10px;
  padding: 12px 16px;
}
</style>
