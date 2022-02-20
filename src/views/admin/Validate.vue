<template>
  <form @submit="onSubmit">
    <input class="valid-input" type="text" v-model="usernameValue" />
    <p>{{ errors.username }}</p>
    <button>提交</button>
  </form>
</template>

<script setup lang="ts">
// import { defineRule, configure, useField, useForm } from "vee-validate";
// import { required, email } from "@vee-validate/rules";
// import { localize } from "@vee-validate/i18n";
// import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
// import * as yup from "yup";

// defineRule("required", required);
// defineRule("email", email);
// configure({
//   generateMessage: localize("zh_CN", zh_CN),
// });

import validate from "@/plugins/validate";

const { handleSubmit, errors } = validate.useForm({
  initialValues: {
    username: "Jason",
    password: "",
  },
  validationSchema: {
    username: validate.yup.string().email().required().label("账号"),
    password: { required: true },
  },
});

const { value: usernameValue } = validate.useField(
  "username",
  {
    required: true,
    email: true,
  },
  {
    label: "用户名",
  }
);
const { value: passwordValue } = validate.useField(
  "password",
  {
    required: true,
  },
  {
    label: "密码",
  }
);

const onSubmit = handleSubmit((values: object) => {
  console.log(values);
  alert("验证通过时执行");
});
</script>

<style lang="scss" scoped>
.valid-input {
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  outline: none;
  border: 1px solid purple;
}
</style>
