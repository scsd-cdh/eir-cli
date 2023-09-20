<script setup lang="ts">
import { ref } from "vue";
import { invoke } from "@tauri-apps/api/tauri";

const greetMsg = ref("");
const name = ref("");

async function greet() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  greetMsg.value = await invoke("greet", { name: name.value });
}
</script>

<template>
  <form class="flex space-x-2" @submit.prevent="greet">
    <input id="greet-input" v-model="name" placeholder="Enter a name..." class="p-2 rounded text-neutral-900"/>
    <button type="submit" class="p-2 bg-neutral-700 rounded">Greet</button>
  </form>

  <p>{{ greetMsg }}</p>
</template>
