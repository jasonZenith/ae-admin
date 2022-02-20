<template>
  <div class="flex items-center">
    <p class="mr-3">{{ label }}</p>
    <input
      type="text"
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
});
</script>

<style lang="scss">
.ae-input {
  flex: 1;
  border-radius: 10px;
  outline: none;
  padding: 12px 16px;
  margin: 16px 0;
  border: 1px solid rgb(197, 197, 197);
  transition: 0.6s;

  &:focus {
    border: 1px solid #0e82cf;
  }
  // @apply w-full rounded-md outline-none border py-3 my-4 px-4 focus:ring-2 focus:border-none ring-offset-2 ring-gray-500 duration-500;
}
</style>
