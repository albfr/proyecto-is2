import { getForecastFromCity, getForecastFromLatLon } from "@/lib/query/getForecast";
 import { cosineSimilarity } from "@/lib/similarity";
import getActivities from "@/lib/query/getActivities";

export default async function handler(req, res) {
  try {

//     const hardcodedData = [
//     {
//         "day": "2025-05-22",
//         "maxTemp": 40,
//         "minTemp": 18,
//         "humidity": 55,
//         "feelsLike": 32,
//         "uvIndex": 8,
//         "shadeFeelsLike": 28,
//         "windSpeed": 15,
//         "recommendations": [
//             {
//                 "name": "Salir a trotar",
//                 "similarity": 0.8112535173763298
//             },
//             {
//                 "name": "Pasear al perro",
//                 "similarity": 0.7597778883860854
//             },
//             {
//                 "name": "Jardinería",
//                 "similarity": 0.8058796067167552
//             }
//         ]
//     },
//     {
//         "day": "2025-05-23",
//         "maxTemp": 20,
//         "minTemp": 4,
//         "humidity": 21,
//         "feelsLike": 16,
//         "uvIndex": 10,
//         "shadeFeelsLike": 8,
//         "windSpeed": 10,
//         "recommendations": [
//             {
//                 "name": "Salir a trotar",
//                 "similarity": 0.998675142670469
//             },
//             {
//                 "name": "Pasear al perro",
//                 "similarity": 0.9222583618379916
//             },
//             {
//                 "name": "Jardinería",
//                 "similarity": 0.9878069445176232
//             }
//         ]
//     },
//     {
//         "day": "2025-05-24",
//         "maxTemp": 50,
//         "minTemp": 30,
//         "humidity": 6,
//         "feelsLike": 36,
//         "uvIndex": 20,
//         "shadeFeelsLike": 32,
//         "windSpeed": 8,
//         "recommendations": [
//             {
//                 "name": "Salir a trotar",
//                 "similarity": 0.9902450663507474
//             },
//             {
//                 "name": "Pasear al perro",
//                 "similarity": 0.9152277379637164
//             },
//             {
//                 "name": "Jardinería",
//                 "similarity": 0.9780763386896373
//             }
//         ]
//     }
// ]
    // res.status(200).json(hardcodedData);  //Remove when moving to dev :D.
    // return;                               
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
