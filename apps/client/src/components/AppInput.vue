<script lang="ts" setup>
import { computed } from 'vue';

interface Props {
  placeholder?: string;
  required?: boolean;
  modelValue: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  required: false,
});

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const proxyValue = computed<string>({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

const finalPlaceholder = computed(() =>
  props.required ? props.placeholder + '*' : props.placeholder,
);
</script>

<template>
  <input
    v-model="proxyValue"
    class="relative w-full py-2 pl-3 pr-10 text-left bg-neutral-100 text-neutral-900 shadow-md cursor-default focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-secondary-500 sm:text-sm placeholder:text-neutral-600"
    :required="required"
    :placeholder="finalPlaceholder"
  />
</template>
