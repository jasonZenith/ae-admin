<template>
  <div class="login-form my-9">
    <AeInput label="账号" placeholder="请输入账号" />
    <AeInput label="密码" placeholder="请输入密码" />
    <AeLoginButton class="mt-8" />
  </div>
</template>

<script setup lang="ts">
import AeInput from "@/components/input/AeInput.vue";
import AeLoginButton from "@/components/button/AeLoginButton.vue";
</script>

<style lang="scss"></style>
