<script lang="ts" setup>
import { computed, ref } from 'vue';
import { nanoid } from 'nanoid';

interface Props {
  required?: boolean;
  modelValue?: string;
  initialValue?: string;
  error?: string | undefined;
  label?: string;
  id?: string;
  placeholder?: any;
}

const props = withDefaults(defineProps<Props>(), {
  // @ts-ignore
  id: () => `app-input-${nanoid(8)}`,
  placeholder: '',
  required: false,
  modelValue: '__defaultModelValue__',
  initialValue: '',
  error: undefined,
  label: undefined,
});

const innerValue = ref(props.initialValue as string);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'update:error', value: string | null): void;
}>();

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
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<template>
  <div>
    <label v-if="label" :for="id" class="mb-1 block text-left">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      v-model="proxyValue"
      class="relative w-full bg-gray bg-opacity-10 py-2 px-3 text-left text-black shadow-md ring-1 ring-muted transition-shadow placeholder:text-black placeholder:text-opacity-75 focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm"
      :id="id"
      :class="{ 'text-danger': error }"
      :required="required"
      @input="() => error && emit('update:error', null)"
    />
    <small v-if="error" class="mt-1 block w-full text-left text-danger">{{
      error
    }}</small>
  </div>
</template>
