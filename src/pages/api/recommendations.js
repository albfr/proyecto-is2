import { getForecastFromCity, getForecastFromLatLon } from "@/lib/query/getForecast";
// import { cosineSimilarity } from "@/lib/similarity";

export default async function handler(req, res) {
  try {
    const lat = req.query.lat;
    const lon = req.query.lon;
    const city = req.query.city;
    let forecast;
    if (lat && lon) {
      forecast = await getForecastFromLatLon(lat, lon);
    }
    else if (city) {
      forecast = await getForecastFromCity(city);
    }
    else {
      throw NoLocationError;
    }
    forecast.forecast.forecastday.forEach(element => {
      console.log(element.date)
    });
    forecast = forecast.forecast.forecastday;
    // const activities = getActivities();
    // const activities = [];

    let data;
    forecast.forEach(day => {
      let dayrecs = []
      activities.forEach(activity => {
        // dayrecs.append(cosineSimilarity(day, activity));
      });
      // data.push(dayrecs);
    });
    res.status(200).json(data);
  }
  catch (err) {
    console.error(err);
    if (err instanceof NoLocationError) {
      res.status(400).json({"error": "No city nor latitude/longitude provided"});
      return;
    }
    res.status(500).json({"error": "An unexpected error occurred in server :/"});
  }
};
