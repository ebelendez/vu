<script setup>
</script>

<template>
  <div class="sidebar">
    <h2>Barra Lateral</h2>
    <router-link to="/contador">Contador</router-link>
    <br>
    <router-link to="/lista-de-tareas">Lista De Tareas</router-link>
    <br>
    <router-link to="/registrar">Registrar</router-link>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: white;
  padding: 20px;
}
</style>