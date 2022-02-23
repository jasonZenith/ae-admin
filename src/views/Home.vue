<template>
  <main
    class="flex flex-col justify-center items-center gap-10 bg-gray-700 h-screen"
  >
    <img
      src="/imgs/zjcat.jpg"
      class="w-36 h-36 object-cover rounded-full border-4 border-white"
      alt="zjcat"
    />
    <h2 class="text-gray-100 text-2xl">ae-admin</h2>
    <div class="flex gap-6">
      <router-link :to="{ name: 'admin.user' }" class="ae-button"
        >user</router-link
      >
      <router-link
        :to="{ name: 'login' }"
        class="ae-button bg-violet-500 hover:bg-violet-600"
        >login</router-link
      >
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Footer from "@/components/globalComp/Footer.vue";
</script>
<script lang="ts">
export default {
  route: { name: "home" },
};
</script>

<style lang="scss"></style>
