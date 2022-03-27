<script lang="ts" setup>
import { getRandomEmoji } from '../utils/getRandomEmoji';
import AppRuler from './AppRuler.vue';
import InlineLink from './InlineLink.vue';
</script>

<template>
  <footer
    class="bg-black text-white text-opacity-75 py-4 space-y-4 font-display"
  >
    <h2 class="container text-xl">
      Made possible by people behind these projects
    </h2>

    <nav class="grid grid-cols-4 gap-6 container">
      <div class="flex flex-col">
        <h3 class="font-semibold text-lg">Common</h3>
        <AppRuler :size="1" class="w-24 !my-2" />
        <div>
          <InlineLink
            class="text-opacity-90"
            to="https://www.typescriptlang.org/"
            >TypeScript</InlineLink
          >
        </div>
        <div>
          <InlineLink class="text-opacity-90" to="https://pnpm.io/"
            >pnpm</InlineLink
          >
          as monorepo & dependency manager
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="font-semibold text-lg">Backend</h3>
        <AppRuler :size="1" class="w-24 !my-2" />
        <div>
          <InlineLink class="text-opacity-90" to="https://nestjs.com/"
            >NestJS</InlineLink
          >
          framework
        </div>
        <div>
          <InlineLink class="text-opacity-90" to="https://www.passportjs.org/"
            >passport + passport-local</InlineLink
          >
          for authentication
        </div>
        <div>
          <InlineLink
            class="text-opacity-90"
            to="https://github.com/exceljs/exceljs"
            >exceljs</InlineLink
          >
          as report generator
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="font-semibold text-lg">Database</h3>
        <AppRuler :size="1" class="w-24 !my-2" />
        <div>
          <InlineLink class="text-opacity-90" to="https://www.postgresql.org/"
            >PostgreSQL</InlineLink
          >
          as primary database
        </div>
        <div>
          <InlineLink class="text-opacity-90" to="https://www.prisma.io/"
            >Prisma</InlineLink
          >
          as ORM layer
        </div>
        <div>
          <InlineLink class="text-opacity-90" to="https://redis.io/"
            >Redis</InlineLink
          >
          as session store
        </div>
      </div>
      <div class="flex flex-col">
        <h3 class="font-semibold text-lg">Frontend</h3>
        <AppRuler :size="1" class="w-24 !my-2" />
        <div>
          <InlineLink class="text-opacity-90" to="https://vuejs.org/"
            >Vue</InlineLink
          >
          framework
        </div>
        <div>
          <InlineLink class="text-opacity-90" to="https://tailwindcss.com/"
            >Tailwind</InlineLink
          >
          for styling
        </div>
        <div>
          <InlineLink class="text-opacity-90" to="https://vitejs.dev/"
            >Vite</InlineLink
          >
          frontend tooling
        </div>
      </div>
    </nav>

    <p class="text-center">
      <span>
        made with
        {{ getRandomEmoji() }} {{ getRandomEmoji() }} {{ getRandomEmoji() }}
      </span>
      <br />
      <span>
        by
        <InlineLink class="text-opacity-90" to="https://github.com/rtabulov"
          >rtabulov</InlineLink
        >
      </span>
    </p>
  </footer>
</template>
