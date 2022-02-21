<template>
  <div class="flex items-center">
    <p class="mr-3">{{ label }}</p>
    <input
      :type="type"
      :placeholder="placeholder"
      class="ae-input placeholder:text-sm"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: false,
  },
  placeholder: String,
  type: {
    type: String,
    default: "text",
  },
  // aevalue: {
  //   type: String,
  //   required: true,
  // },
});
</script>

<style lang="scss" scoped>
.ae-input {
  flex: 1;
}
</style>
