<script setup lang="ts">
import { userApi } from "./apis/userApi";

const res = await userApi.login();
console.log(res);

// import helper from "@/types/helper";
// console.log(helper.env.VITE_SOME_KEY);
</script>

<template>
  <router-view />
</template>

<style></style>
