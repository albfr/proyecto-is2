export default async function getWeatherFromCity(city) {
  const API_KEY = process.env.API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export default async function getWeatherFromLatLon(lat, lon) {
  const API_KEY = process.env.API_KEY;
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&aqi=no`
  const res = await fetch(url);
  const data = await res.json();
  return data;
};
