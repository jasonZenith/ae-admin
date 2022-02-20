<template>
  <input type="text" :value="props.modelValue" @input="emitInput" />
  <!-- @input="$emit('update:modelValue',($event.target as HTMLInputElement).value)" -->
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const emitInput = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
};
</script>

<style lang="scss"></style>
