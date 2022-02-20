<template>
  <a class="text-blue-800 hover:text-blue-500">
    {{ title }}
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
