function norm(x) {
    let s = 0;

    for (let value of x) {
        s += value * value;
    }

    return Math.sqrt(s);
};

/**
 * weather: object with current climate params as given by a call to
 * getWeatherFromCity of getWeatherFromLatLon.
 * activity: object with preferred climate params for activity.
 *
 * TODO: weather should be a global variable available on demand, only
 * do one call of the getWeather* methods to not overload API calls...
 */
export function cosineSimilarity(weather, activity) {
    // Current values
    const temp = weather.current.temp_c;
    const is_day = weather.current.is_day;
    const wind = weather.current.wind_kph;
    const pressure = weather.current.pressure_mb;
    const precip = weather.current.precip_mm;
    const humidity = weather.current.humidity;
    const cloud = weather.current.cloud;
    const vis = weather.current.vis_km;
    const uv = weather.current.uv;

    const curr = [
        temp,
        is_day,
        wind,
        pressure,
        precip,
        humidity,
        cloud,
        vis,
        uv
    ];

    // Preferences
    const pref_temp = activity.temp_c;
    const pref_is_day = activity.is_day;
    const pref_wind = activity.wind_kph;
    const pref_pressure = activity.pressure_mb;
    const pref_precip = activity.precip_mm;
    const pref_humidity = activity.humidity;
    const pref_cloud = activity.cloud;
    const pref_vis = activity.vis_km;
    const pref_uv = activity.uv;

    const pref = [
        pref_temp,
        pref_is_day,
        pref_wind,
        pref_pressure,
        pref_precip,
        pref_humidity,
        pref_cloud,
        pref_vis,
        pref_uv
    ];

    // Compute norms
    const curr_norm = norm(curr);
    const pref_norm = norm(pref);

    // Compute dot product
    let p = 0;

    for (let i = 0; i < 9; i++) {
        p += curr[i] * pref[i];
    }

    return (p / (curr_norm * pref_norm));
};
