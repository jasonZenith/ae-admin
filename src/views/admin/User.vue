<template>
  <div class="admin-user">
    <AdminCards />
    <AdminEcharts />
  </div>
</template>

<script setup lang="ts">
import AdminCards from "@/viewsComps/admin/AdminCards.vue";
import AdminEcharts from "@/viewsComps/admin/AdminEcharts.vue";
</script>

<script lang="ts">
export default {
  route: {
    meta: {
      auth: true,
      title: "analysis",
    },
  },
};
</script>
