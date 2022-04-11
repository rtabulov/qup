<template>
  <div class="overflow-x-auto">
    <table class="w-full">
      <thead
        v-if="$slots.head"
        class="whitespace-nowrap bg-black text-lg text-white"
      >
        <slot name="head" />
      </thead>

      <tbody>
        <slot />
      </tbody>
    </table>
  </div>
</template>
