<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const weather = ref(null)

async function fetchWeather() {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=35.69&longitude=139.69&hourly=temperature_2m`
  )
  weather.value = await res.json()
}

onMounted(() => {
  fetchWeather()
})
</script>

<template>
  <p v-if="!weather">Loading...</p>
  <pre v-else>{{ weather }}</pre>
</template>

<style scoped></style>
