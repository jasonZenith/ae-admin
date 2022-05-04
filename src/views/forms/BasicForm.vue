<template>
  <div class="flex">
    <a-form class="w-[500px]" :model="formState" v-bind="layout" name="nest-messages" @finish="onFinish">
      <a-form-item :name="['user', 'name']" label="姓名" :rules="{ required: true, message: '姓名是必须的!' }">
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item :name="['user', 'email']" label="邮箱" :rules="[{ type: 'email', message: '不是有效邮箱' }]">
        <a-input v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item :name="['user', 'age']" label="年龄" :rules="[{ type: 'number', min: 0, max: 99 }]">
        <a-input-number v-model:value="formState.user.age" />
      </a-form-item>
      <a-form-item :name="['user', 'website']" label="网站">
        <a-input v-model:value="formState.user.website" />
      </a-form-item>
      <a-form-item :name="['user', 'introduction']" label="介绍">
        <a-textarea v-model:value="formState.user.introduction" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
        <a-button class="bg-blue-500" type="primary" html-type="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts" setup>
import { message } from "ant-design-vue";
import { reactive } from "vue";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const formState = reactive({
  user: {
    name: "",
    age: undefined,
    email: "",
    website: "",
    introduction: "",
  },
});

const onFinish = (values: any) => {
  console.log("Success:", values);
  message.success("提交成功");
};
</script>
