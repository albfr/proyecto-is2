
export default async function handler(req, res) {

  const API_KEY = process.env.API_KEY;
  const city = "Concepcion"
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
}