<script lang="ts" setup>
import { getRandomEmoji } from '../utils/getRandomEmoji';
</script>

<template>
  <footer class="bg-primary-700 text-neutral-100 py-4 space-y-4 font-display">
    <nav class="grid grid-cols-5 container">
      <div class="flex flex-col">
        <a role="link" aria-disabled="true">Lorem</a>
        <a role="link" aria-disabled="true">ipsum</a>
        <a role="link" aria-disabled="true">dolor,</a>
        <a role="link" aria-disabled="true">sit</a>
        <a role="link" aria-disabled="true">amet</a>
      </div>
      <div class="flex flex-col">
        <a role="link" aria-disabled="true">consectetur</a>
        <a role="link" aria-disabled="true">adipisicing</a>
        <a role="link" aria-disabled="true">elit.</a>
        <a role="link" aria-disabled="true">Ducimus</a>
        <a role="link" aria-disabled="true">nesciunt</a>
      </div>
      <div class="flex flex-col">
        <a role="link" aria-disabled="true">sint</a>
        <a role="link" aria-disabled="true">deserunt</a>
        <a role="link" aria-disabled="true">natus</a>
        <a role="link" aria-disabled="true">alias</a>
        <a role="link" aria-disabled="true">aspernatur?</a>
      </div>
    </nav>

    <p class="text-center">
      made with nestjs, vuejs, and
      {{ getRandomEmoji() }} {{ getRandomEmoji() }} {{ getRandomEmoji() }}
    </p>
  </footer>
</template>
