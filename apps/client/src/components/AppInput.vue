<script lang="ts" setup>
import { computed, ref } from 'vue';

interface Props {
  placeholder?: string;
  required?: boolean;
  modelValue?: string;
  initialValue?: string;
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: '',
  required: false,
  modelValue: '__defaultModelValue__',
  initialValue: '',
});

const innerValue = ref(props.initialValue);

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const proxyValue = computed<string>({
  get() {
    if (props.modelValue === '__defaultModelValue__') {
      return innerValue.value;
    }
    return props.modelValue as string;
  },
  set(val) {
    innerValue.value = val;
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
    class="relative w-full py-2 pl-3 pr-10 text-left bg-gray text-white shadow-md cursor-default focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm placeholder:text-white placeholder:text-opacity-75"
    :required="required"
    :placeholder="finalPlaceholder"
  />
</template>
