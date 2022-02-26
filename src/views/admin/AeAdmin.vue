<template>
  <div class="aeadmin-container">
    <Form class="flex" @submit="onSubmit">
      <Field
        name="account"
        label="帐号"
        :validate-on-input="true"
        :rules="{ required: true, email: true }"
        #default="{ field, errorMessage }"
      >
        <input
          type="text"
          class="aeadmin-input relative"
          v-bind="field"
          v-model="account"
        />

        <p class="absolute text-white translate-y-10">{{ errorMessage }}</p>
      </Field>
      <!-- <ErrorMessage name="email" /> -->

      <button class="aeadmin-button text-white rounded-lg">提交</button>
    </Form>
    <!-- <input class="aeadmin-input" type="text" /> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import validate from "@/plugins/validate";
const { Form, Field } = validate;

const account = ref("");

const onSubmit = (values: object) => {
  console.log(values);
  alert("验证通过时执行");
};
</script>
<script lang="ts">
export default {
  route: { meta: { auth: true, title: "Aeadmin" } },
};
</script>

<style lang="scss">
.aeadmin-container {
  background-color: #34495e;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .aeadmin-input {
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    outline: none;
  }

  .aeadmin-button {
    border: 1px solid #fff;
    padding: 0.5rem 1rem;
  }
}
</style>
