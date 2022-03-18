<script lang="ts" setup>
import { reactive, ref, watchEffect } from 'vue';
import AppInput from '../../components/AppInput.vue';
import AppSelect from '../../components/AppSelect.vue';
import AppButton from '../../components/AppButton.vue';
import { RegisterUserDto, Department } from '../../types';
import { useRouter } from 'vue-router';
import { getDepartments } from '../../api';
import { register } from '../../api';

const form = reactive<RegisterUserDto>({
  firstName: '',
  lastName: '',
  middleName: '',
  department: '',
  position: '',
  email: '',
  password: '',
  confirmationPassword: '',
});

const departments = ref<Department[]>([]);
getDepartments().then((dpts) => {
  departments.value = dpts;
  form.department = dpts[0].id;
});

const router = useRouter();

async function onSubmit() {
  await register({ ...form });
  router.push('/login');
}
</script>

<template>
  <div class="text-center">
    <h1 class="text-3xl">Регистрация</h1>
    <hr class="max-w-xs my-6 mx-auto border-red border-b-[3px]" />
    <form
      v-if="departments.length"
      class="max-w-xl mx-auto space-y-4"
      @submit.prevent="onSubmit"
    >
      <AppSelect
        v-model="form.department"
        type="text"
        :options="departments"
        :get-label="(dpt) => dpt.name"
        :get-value="(dpt) => dpt.id"
      />

      <AppInput
        v-model="form.lastName"
        type="text"
        required
        placeholder="Фамилия"
      />
      <AppInput
        v-model="form.firstName"
        type="text"
        required
        placeholder="Имя"
      />
      <AppInput
        v-model="form.middleName"
        type="text"
        required
        placeholder="Отчество"
      />
      <AppInput
        v-model="form.position"
        type="text"
        required
        placeholder="Должность"
      />
      <AppInput
        v-model="form.email"
        type="email"
        required
        placeholder="E-mail"
      />
      <AppInput
        v-model="form.password"
        type="password"
        required
        placeholder="Пароль"
      />
      <AppInput
        v-model="form.confirmationPassword"
        type="password"
        required
        placeholder="Подтвердите пароль"
      />

      <AppButton type="submit" class="w-full">Зарегистрироваться</AppButton>
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
