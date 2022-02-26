<template>
  <div class="layout-admin">
    <AdminAside class="hidden md:block" />
    <main class="bg-gray-100 w-full">
      <AdminNavbar />
      <HistoryTab />
      <div class="mx-3">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AdminAside from "./adminComps/AdminAside.vue";
import AdminNavbar from "./adminComps/AdminNavbar.vue";
import HistoryTab from "./adminComps/HistoryTab.vue";
</script>

<style lang="scss">
.layout-admin {
  @apply w-full min-h-screen flex;
}
</style>
