<script lang="ts" setup>
import { format } from 'date-fns';
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  getCertificate,
  approveCertificate,
  disapproveCertificate,
} from '../../api';
import { Certificate } from '../../types';
import { limitLength } from '../../utils';
import AppButton from '../../components/AppButton.vue';
import { useNotificationsStore } from '../../store/notifications-store';

const props = defineProps<{ id: string }>();

const router = useRouter();
const notifications = useNotificationsStore();
const certificate = ref<Certificate | null>(null);
getCertificate(props.id).then((c) => (certificate.value = c));

const comment = ref('');

async function onApprove() {
  if (certificate.value) {
    await approveCertificate(certificate.value.id, comment.value);
    notifications.create({ text: `Сертификат успешно подтверждён` });
    router.push('/certificates/awaiting-approval');
  }
}

async function onDisapprove() {
  if (certificate.value) {
    await disapproveCertificate(certificate.value.id, comment.value);
    notifications.create({ text: `Сертификат отклонён` });
    router.push('/certificates/awaiting-approval');
  }
}
</script>

<template>
  <table v-if="certificate">
    <tbody>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Преподаватель
        </th>
        <td>
          {{ certificate.teacher?.lastName }}
          {{ certificate.teacher?.firstName }}
          {{ certificate.teacher?.middleName }}
        </td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Название курса
        </th>
        <td>{{ certificate.name }}</td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Место прохождения обучения
        </th>
        <td>{{ certificate.issuedBy }}</td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Дата выдачи сертификата
        </th>
        <td>{{ format(new Date(certificate.issuedDate), 'dd.MM.yyyy') }}</td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Дата начала обучения
        </th>
        <td>{{ format(new Date(certificate.startDate), 'dd.MM.yyyy') }}</td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Дата окончания обучения
        </th>
        <td>{{ format(new Date(certificate.endDate), 'dd.MM.yyyy') }}</td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Прикрепленные файлы
        </th>
        <td>
          <a
            v-for="file in certificate.files"
            :key="file.id"
            class="my-1 block whitespace-nowrap text-blue transition-colors hover:text-lightblue"
            :href="`/api/uploads/certificates/${file.name}`"
            target="_blank"
          >
            <span>
              {{ limitLength(file.name) }}
            </span>
          </a>
        </td>
      </tr>
      <tr>
        <th class="min-w-[200px] py-2 pr-12 text-left text-lightblue">
          Комментарий
        </th>
        <td>{{ certificate.comment }}</td>
      </tr>
    </tbody>
  </table>

  <textarea
    v-model="comment"
    placeholder="Ваши примечания"
    class="relative w-full bg-gray bg-opacity-10 py-2 px-3 text-left text-black shadow-md ring-1 ring-muted transition-shadow placeholder:text-black placeholder:text-opacity-75 focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm"
  ></textarea>

  <div class="mt-6 flex gap-3">
    <AppButton @click="onApprove">Подтвердить</AppButton>
    <AppButton variant="secondary" @click="onDisapprove">Отклонить</AppButton>
  </div>
</template>

<route lang="json">
{
  "meta": {
    "requiresAuth": ["hr", "departmentHead"]
  }
}
</route>
