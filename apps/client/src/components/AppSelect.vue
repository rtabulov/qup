<script lang="ts" setup>
import { computed, ref } from 'vue';
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from '@headlessui/vue';
import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid';

interface Props {
  options: any[] | readonly any[];
  modelValue: any;
  getLabel?: (option: any) => string;
  getValue?: (option: any) => string;
}
const props = withDefaults(defineProps<Props>(), {
  getLabel: (option: any) => String(option),
  getValue: (option: any) => String(option),
});
const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const proxyValue = computed<string>({
  get() {
    return props.options.find((el) => props.getValue(el) === props.modelValue);
  },
  set(val) {
    emit('update:modelValue', props.getValue(val));
  },
});
</script>

<template>
  <Listbox v-model="proxyValue" v-slot="{ disabled }">
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full cursor-default bg-gray bg-opacity-10 py-2 pl-3 pr-10 text-left text-black shadow-md ring-1 ring-muted focus:outline-none focus-visible:ring focus-visible:ring-muted focus-visible:ring-opacity-75 sm:text-sm"
        :class="{ 'bg-muted bg-opacity-50': disabled }"
      >
        <span class="block truncate">{{ getLabel(proxyValue) }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <SelectorIcon class="text-gray-400 h-5 w-5" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto bg-light py-1 text-left text-base shadow-lg ring ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="option in options"
            :key="getValue(option)"
            :value="option"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-lightblue bg-opacity-20' : '',
                'relative cursor-default select-none py-2 pl-10 pr-4 text-black',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ getLabel(option) }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-blue"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
