import axios from "axios"

const URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY = "fcc36a0dd7e0d8da4d9a301f7d829fca"

export const fetchWeather = async query => {
	const { data } = await axios.get(URL, {
		params: {
			q: query,
			units: "metric",
			APPID: API_KEY,
		},
	})
	return data
}

export default fetchWeather
