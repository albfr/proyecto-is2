import { getCurrentWeatherFromCity, getCurrentWeatherFromLatLon } from "@/lib/query/getCurrentWeather";

export default async function handler(req, res) {

  try {
    if (req.query.city) {
      const city = req.query.city;
      const data = await getCurrentWeatherFromCity(city);
      res.status(200).json(data);
    }
    if (req.query.lat && req.query.lon) {
      const lat = req.query.lat;
      const lon = req.query.lon;
      const data = await getCurrentWeatherFromLatLon(lat, lon);
      res.status(200).json(data);
    }
    throw 12;
  }
  catch (err) {
    if (err == 12) {
      console.err("Not enough arguments, you must provide city or latitude/longitude");
      res.status(400).json({error: "Not enough arguments, you must provide city or latitude/longitude"}); 
    }
    else {
      console.error(err);
    }
  }
}