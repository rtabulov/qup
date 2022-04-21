<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import AppInput from '../../components/AppInput.vue';
import AppSelect from '../../components/AppSelect.vue';
import AppButton from '../../components/AppButton.vue';
import { RegisterUserDto, Department } from '../../types';
import { getDepartments } from '../../api';
import { register } from '../../api';
import AppRuler from '../../components/AppRuler.vue';
import InlineLink from '../../components/InlineLink.vue';

const form = reactive<Partial<RegisterUserDto>>({
  // firstName: '',
  // lastName: '',
  // middleName: '',
  // departmentId: '',
  // position: '',
  email: '',
  password: '',
  // confirmationPassword: '',
});

const departments = ref<Department[]>([]);
getDepartments().then((dpts) => {
  departments.value = dpts;
  form.departmentId = dpts[0].id;
});

const router = useRouter();
const errors = ref<Partial<Record<keyof RegisterUserDto, string>>>({});

const isLoading = ref(false);
async function onSubmit() {
  isLoading.value = true;
  try {
    await register({ ...form });
    router.push('/login');
  } catch (e: any) {
    isLoading.value = false;
    if (e.response) {
      errors.value = e.response.data;
    }
  }
}
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl">Регистрация</h1>
    <AppRuler center />
    <form
      v-if="departments.length"
      class="mx-auto max-w-xl space-y-4"
      @submit.prevent="onSubmit"
    >
      <!-- <AppSelect
        v-model="form.departmentId"
        v-model:error="errors.departmentId"
        type="text"
        :options="departments"
        :get-label="(dpt) => dpt.name"
        :get-value="(dpt) => dpt.id"
      />

      <AppInput
        v-model="form.lastName"
        v-model:error="errors.lastName"
        type="text"
        required
        label="Фамилия"
      />
      <AppInput
        v-model="form.firstName"
        v-model:error="errors.firstName"
        type="text"
        required
        label="Имя"
      />
      <AppInput
        v-model="form.middleName"
        v-model:error="errors.middleName"
        type="text"
        required
        label="Отчество"
      />
      <AppInput
        v-model="form.position"
        v-model:error="errors.position"
        type="text"
        required
        label="Должность"
      /> -->
      <AppInput
        v-model="form.email"
        v-model:error="errors.email"
        type="email"
        required
        label="E-mail"
      />
      <AppInput
        v-model="form.password"
        v-model:error="errors.password"
        type="password"
        required
        label="Пароль"
      />
      <!-- <AppInput
        v-model="form.confirmationPassword"
        v-model:error="errors.confirmationPassword"
        type="password"
        required
        label="Подтвердите пароль"
      /> -->

      <AppButton :disabled="isLoading" type="submit" class="w-full"
        >Зарегистрироваться</AppButton
      >

      <p class="mt-2">
        Уже зарегистрированы?
        <InlineLink to="/login">Вход в систему</InlineLink>
      </p>
    </form>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "requiresGuest": true
  }
}
</route>
