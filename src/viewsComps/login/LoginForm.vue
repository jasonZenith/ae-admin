<template>
  <Form @submit="onSubmit" :validation-schema="schema" class="login-form my-9">
    <Field name="account" value="jasonzeng@ae.com" label="账号" #default="{ field, errorMessage }">
      <section>
        <span>账号</span>
        <input class="ae-input" v-bind="field" placeholder="请输入手机号或邮箱" />
      </section>
      <p class="error-message absolute -translate-y-3 translate-x-12">
        {{ errorMessage }}
      </p>
    </Field>

    <!-- :validate-on-input="true"  -->

    <Field name="password" value="123456" label="密码" #default="{ field, errorMessage }">
      <section>
        <span>密码</span>
        <input type="password" class="ae-input" v-bind="field" placeholder="请输入密码" />
      </section>
      <p class="error-message absolute -translate-y-3 translate-x-12">
        {{ errorMessage }}
      </p>
    </Field>

    <AeLoginButton class="mt-8" />
  </Form>
</template>

<script setup lang="ts">
import { userApi, dataParams } from "@/apis/userApi";
import AeLoginButton from "@/components/button/AeLoginButton.vue";
import validate from "@/plugins/validate";
import utils from "@/utils";
import { CacheEnum } from "@/enums/cacheEnum";
import { useRouter } from "vue-router";
const { Form, Field } = validate;

const router = useRouter();
const schema = {
  account: { required: true, regex: /.+@.+\..+|\d{11}/ },
  password: { required: true, min: 6 },
};
const onSubmit = async (values: object) => {
  const res = await userApi.login(values);
  if (res.code === 200) {
    utils.store.set("token", {
      expire: 1800, // 自定义token 过期时间30分钟
      token: res.result.token,
    });
    const cacheRouterName = utils.store.get(CacheEnum.CACHE_ROUTER_NAME) ?? "admin.user";
    router.push({ name: cacheRouterName });
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  align-items: center;

  span {
    margin-right: 1rem;
  }
}
</style>
