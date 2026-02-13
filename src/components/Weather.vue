<script setup>
  import { useWeather } from '@/compusables/useWeather'
  import { onMounted } from 'vue'
  import { useWeatherStore } from '@/stores/weatherStore'
  const weatherStore = useWeatherStore()

  onMounted(() => {
    useWeather()
  })
</script>

<template>
  <h3>La temperatura actual es: {{ weatherStore.temperatura }}</h3>
</template>

<style scoped>
</style>
