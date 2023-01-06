export interface OpenMeteo {
  daily: Daily
  daily_units: DailyUnits
  elevation: number
  generationtime_ms: number
  latitude: number
  longitude: number
  timezone: string
  timezone_abbreviation: string
  utc_offset_seconds: number
}

export interface DailyUnits {
  time: string
  weathercode: string
  temperature_2m_max: string
  temperature_2m_min: string
  sunrise: string
  sunset: string
}

export interface Daily {
  time: string[]
  weathercode: number[]
  temperature_2m_max: number[]
  temperature_2m_min: number[]
  sunrise: string[]
  sunset: string[]
}
