<script lang="ts" setup>
import { reactive, ref } from 'vue';
import AppInput from '../../components/AppInput.vue';
import AppButton from '../../components/AppButton.vue';
import { LoginUserDto } from '../../types';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '../../store';
import { login } from '../../api';
import AppRuler from '../../components/AppRuler.vue';
import InlineLink from '../../components/InlineLink.vue';
import { getHomePage } from '../../utils';

const form = reactive<LoginUserDto>({
  email: '',
  password: '',
});

const errors = ref<Partial<Record<keyof LoginUserDto, string>>>({});

const router = useRouter();
const route = useRoute();
const userStore = useStore();

const isLoading = ref(false);
async function onSubmit() {
  isLoading.value = true;
  try {
    await login({ ...form });
    await userStore.tryLoggingIn();

    if (route.query.backurl) {
      router.push(route.query.backurl as string);
    } else {
      router.push(getHomePage(userStore.user?.role?.key));
    }
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
    <h1 class="text-3xl">Вход</h1>
    <AppRuler center />
    <form class="max-w-xl mx-auto space-y-4" @submit.prevent="onSubmit">
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

      <AppButton :disabled="isLoading" type="submit" class="w-full"
        >Войти</AppButton
      >
      <p class="mt-2">
        Еще не зарегистрированы?
        <InlineLink to="/register">можете сделать это здесь</InlineLink>
      </p>
      <p class="mt-2">Для смены роли обратитесь к администратору</p>
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
