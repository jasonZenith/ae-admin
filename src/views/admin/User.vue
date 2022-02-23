<template>
  <div class="admin-user">
    admin/user.vue
    <!-- <a-card
      title="Card title"
      shadow="hover"
      :bordered="false"
      style="width: 300px"
    >
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </a-card> -->
  </div>
</template>

<script setup lang="ts"></script>
<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
    },
  },
};
</script>

<style lang="scss">
.admin-user {
  // @apply m-2;
}
</style>
