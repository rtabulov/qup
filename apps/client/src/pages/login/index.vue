<script lang="ts" setup>
import { reactive } from 'vue';
import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';
import { LoginUserDto } from '../../types';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../store';

const form = reactive<LoginUserDto>({
  email: '',
  password: '',
});

const router = useRouter();
const userStore = useUserStore();

async function onSubmit() {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ ...form }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  const userData = await fetch('/api/auth/self').then((res) => res.json());
  userStore.setUser(userData);

  router.push('/');
}
</script>

<template>
  <div class="py-6 text-center">
    <h1 class="text-3xl">Вход</h1>
    <hr class="max-w-xs my-6 mx-auto border-red border-b-[3px]" />
    <form class="max-w-xl mx-auto space-y-4" @submit.prevent="onSubmit">
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

      <AppButton type="submit" class="w-full">Войти</AppButton>
    </form>
  </div>
</template>
