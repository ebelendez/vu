<script setup>
  import {useRegistrarStore} from '@/modules/registro/stores/registrarStore';
  const registrarStore = useRegistrarStore()
  /* import { ref, watch } from 'vue'
  const nombre = ref(registrarStore.nombre.value)
  const email = ref(registrarStore.email.value)
  watch(() => registrarStore.nombre, (newValue) => {
    nombre.value = newValue;
  })
  watch(() => registrarStore.email, (newValue) => {
    email.value = newValue;
  }) */
</script>

<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h3>Nombre: {{ registrarStore.nombre }}</h3>
    <h3>Email: {{ registrarStore.email }}</h3>
    <router-link to="/contador">Contador</router-link>
    <br>
    <router-link to="/lista-de-tareas">Lista De Tareas</router-link>
    <br>
    <router-link to="/registrar">Registrar</router-link>
    <br>
    <router-link to="/calcular">Calcular</router-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: white;
  padding: 20px;
}
</style>