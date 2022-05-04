<template>
  <main class="flex flex-col justify-center items-center gap-10 h-screen">
    <img src="/imgs/zjcat.jpg" class="w-36 h-36 object-cover rounded-full z-20" alt="zjcat" />
    <h2 class="text-gray-100 text-2xl z-20">ae-admin</h2>
    <div class="flex gap-6 z-20">
      <router-link :to="{ name: 'admin.user' }" class="ae-button hover:text-white">user</router-link>
      <router-link :to="{ name: 'login' }" class="ae-button bg-violet-500 hover:bg-violet-600 hover:text-white"
        >login</router-link
      >
    </div>
    <div class="backdrop z-10"></div>
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

<style lang="scss" scoped>
main {
  background: url("/imgs/ae.jpg") no-repeat;
  background-size: cover;
  object-fit: cover;
  position: relative;

  .backdrop {
    background: rgba($color: #111, $alpha: 1);
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    opacity: 0.55;
    pointer-events: none;
  }
}
</style>
