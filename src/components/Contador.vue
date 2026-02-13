<script setup>
import {ref} from 'vue'
const contador = ref(0);
</script>

<template>
  <h1>Hola Mundo</h1>
  <br>
  <button @click="contador--" :disabled="contador == 0"> - </button>
  {{ contador }}
  <button @click="contador++"> + </button>
  <br>
</template>

<style scoped>
</style>
