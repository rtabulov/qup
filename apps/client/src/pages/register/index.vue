<script lang="ts" setup>
import { reactive, ref } from 'vue';
import AppInput from '../../components/AppInput.vue';
import AppSelect from '../../components/AppSelect.vue';
import AppButton from '../../components/AppButton.vue';

const form = reactive({
  firstName: '',
  lastName: '',
  middleName: '',
  department: '',
  position: '',
});

const departments = ref([]);
fetch('/api/departments')
  .then((res) => res.json())
  .then((dpts) => {
    departments.value = dpts;
    form.department = dpts[0].id;
  });

async function onSubmit() {
  const res = await fetch('/api/teachers', {
    method: 'POST',
    body: JSON.stringify({ ...form }),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  console.log(res);
}
</script>

<template>
  <div class="py-6 text-center">
    <h1 class="text-3xl">Регистрация</h1>
    <hr class="max-w-xs my-6 mx-auto border-secondary-300 border-b-[3px]" />
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
      <AppButton type="submit" class="w-full">Зарегистрироваться</AppButton>
    </form>
  </div>
</template>
