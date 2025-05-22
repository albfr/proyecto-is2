import { getForecastFromCity, getForecastFromLatLon } from "@/lib/query/getForecast";
 import { cosineSimilarity } from "@/lib/similarity";
import getActivities from "@/lib/query/getActivities";

export default async function handler(req, res) {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const city = req.query.city;
    let forecast;
    if (lat && lon)
      forecast = await getForecastFromLatLon(lat, lon);
    else if (city)
      forecast = await getForecastFromCity(city);
    else
      throw 1;

    forecast = forecast.forecast.forecastday;
    const activities = await getActivities();
    if (!activities)
      throw new Error("an error has occured in connection with databse");

    let data = [];
    forecast.forEach(day => {
      let dayrecs = []
      activities.forEach(activity => {
        dayrecs.push({"name": activity.name, "similarity": cosineSimilarity(day.day, activity)});
      });
      data.push({"day": day.date, "recommendations": dayrecs});
    });

    data.push({"forecastday": forecast});

    res.status(200).json(data);
  }
  catch (err) {
    console.error(err);
    if (err == 1)
      res.status(400).json({"error": "No city nor latitude/longitude provided"});
    else
      res.status(500).json({"error": "An unexpected error occurred in server :/"});
  }
};
