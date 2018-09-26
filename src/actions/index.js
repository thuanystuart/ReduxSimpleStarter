const API_KEY = '3623c6bdf136418b21756aac17213e61'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`
import axios from 'axios'

export const FETCH_WEATHER = 'FETCH-WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},br`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
