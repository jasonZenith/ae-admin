<template>
  <div class="flex">
    <a-form
      class="w-[500px]"
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item label="用户名" name="username" :rules="[{ required: true, message: '请输入你的用户名!' }]">
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item label="密码" name="password" :rules="[{ required: true, message: '请输入你的密码!' }]">
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">记住</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button class="bg-blue-500" type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}
const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>
