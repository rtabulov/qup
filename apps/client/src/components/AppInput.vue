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
    <label v-if="label" :for="id" class="text-left block mb-1">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      v-model="proxyValue"
      class="relative w-full py-2 px-3 text-left bg-gray text-white shadow-md focus:outline-none focus-visible:ring focus-visible:ring-muted sm:text-sm placeholder:text-white placeholder:text-opacity-75"
      :id="id"
      :class="{ 'text-red': error }"
      :required="required"
      @input="() => error && emit('update:error', null)"
    />
    <small v-if="error" class="text-red w-full block text-left mt-1">{{
      error
    }}</small>
  </div>
</template>
