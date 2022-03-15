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
  options: any[];
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
  <Listbox v-model="proxyValue">
    <div class="relative mt-1">
      <ListboxButton
        class="relative w-full py-2 pl-3 pr-10 text-left bg-gray text-white shadow-md cursor-default focus:outline-none focus-visible:ring focus-visible:ring-opacity-75 focus-visible:ring-muted sm:text-sm"
      >
        <span class="block truncate">{{ getLabel(proxyValue) }}</span>
        <span
          class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
        >
          <SelectorIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition duration-100 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="z-10 text-left absolute w-full py-1 mt-1 overflow-auto text-base bg-dark shadow-lg max-h-60 ring ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            v-slot="{ active, selected }"
            v-for="person in options"
            :key="person.name"
            :value="person"
            as="template"
          >
            <li
              :class="[
                active ? 'bg-black bg-opacity-75' : '',
                'cursor-default select-none relative py-2 pl-10 pr-4 text-white',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-medium' : 'font-normal',
                  'block truncate',
                ]"
                >{{ person.name }}</span
              >
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3 text-red"
              >
                <CheckIcon class="w-5 h-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
