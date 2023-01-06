<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import type { OpenMeteo } from '@/types/OpenMeteo'

const weather = ref<OpenMeteo | null>(null)

async function fetchWeather() {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=34.07&longitude=134.57&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&windspeed_unit=ms&timezone=Asia%2FTokyo`
  )
  weather.value = (await res.json()) as OpenMeteo
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
