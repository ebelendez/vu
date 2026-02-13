import axios from "axios"
const API_URL = 'https://api.open-meteo.com/v1/forecast?latitude=23&longitude=-102&current=temperature_2m&timezone=auto'
export const getTemperatura = async () => {
  const respuesta = await axios.get(API_URL)
  const nuevaTemperatura = respuesta.data.current.temperature_2m + ' ' + respuesta.data.current_units.temperature_2m
  return nuevaTemperatura
}
