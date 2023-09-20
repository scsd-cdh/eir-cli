<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Greet from "./components/Greet.vue";
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full h-screen space-y-12 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-50">
    <h1 class="text-4xl font-semibold">Welcome to Tauri!</h1>

    <div class="flex space-x-12">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="w-16 aspect-square" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="w-16 aspect-square" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="w-16 aspect-square" alt="Vue logo" />
      </a>
    </div>

    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a class="underline" href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a class="underline" href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a class="underline" href="https://github.com/tauri-apps/tauri-vscode" target="_blank"
        >Tauri</a
      >
      +
      <a class="underline" href="https://github.com/rust-lang/rust-analyzer" target="_blank"
        >rust-analyzer</a
      >
    </p>

    <Greet />
  </div>
</template>