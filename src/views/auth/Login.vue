<template>
  <div class="login-container bg-blue-100 w-full h-screen">
    <div class="login-box translate-y-[100px]">
      <section class="w-full md:w-1/2 p-6">
        <h2 class="text-center mt-6 text-dark-700 text-2xl">登录 ae 系统</h2>
        <LoginForm />
        <LoginLinks />
      </section>
      <section class="w-0 md:w-1/2">
        <LoginPic />
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "@/viewsComps/login/LoginForm.vue";
import LoginLinks from "@/viewsComps/login/LoginLinks.vue";
import LoginPic from "@/viewsComps/login/LoginPic.vue";
</script>

<script lang="ts">
export default {
  route: {
    path: `/login`,
    name: "login",
  },
};
</script>

<style lang="scss">
.login-container {
  .login-box {
    width: 90%;
    min-width: 350px;
    max-width: 768px;
    margin: 0 auto;
    background: #fff;
    height: 450px;
    display: flex;
    overflow: hidden;
    border-radius: 1rem;
    box-shadow: 0 0 2rem rgba($color: #000000, $alpha: 0.2);
  }
}
</style>
