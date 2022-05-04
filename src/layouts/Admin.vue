<template>
  <div class="layout-admin">
    <AdminAside class="hidden md:block" />
    <main class="bg-gray-100 w-full">
      <AdminNavbar />
      <HistoryTab />
      <div class="m-3">
        <router-view #default="{ Component }">
          <transition mode="out-in" class="transition-box">
            <!-- <transition mode="out-in" enter-active-class="animate__animated animate__fadeInUp"> -->
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AdminAside from "./adminComps/AdminAside.vue";
import AdminNavbar from "./adminComps/AdminNavbar.vue";
import HistoryTab from "./adminComps/HistoryTab.vue";
import { message } from "ant-design-vue";

message.success("登录成功");
</script>

<style lang="scss">
.layout-admin {
  @apply w-full min-h-screen flex;
}

.transition-box {
  animation: trans 0.3s ease;
}

.ant-message-custom-content {
  @apply flex items-center;
}

@keyframes trans {
  0% {
    opacity: 0;
    transform: translateY(5%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
