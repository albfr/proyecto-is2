import React, { useState, useEffect } from "react";
import styles from "@/styles/perfil/ActivityModification.module.css";

function ActivityModification({ activity, open, onClose }) {
  if (!open) return null;

  const [activityId, setActivityId] = useState(null);
  const [activityName, setActivityName] = useState("");
  const [humidityValue, setHumidityValue] = useState(50);
  const [uvIndex, setUvIndex] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [idealTemp, setIdealTemp] = useState(20);
  const [selectedWeather, setSelectedWeather] = useState([]);

useEffect(() => {
  if (activity) {
    setActivityId(activity.id_activity || null);
    setActivityName(activity.name || "");
    setHumidityValue(activity.humidity ?? 50);
    setUvIndex(activity.uv_index ?? 0);
    setWindSpeed(activity.wind ?? 0);
    setSelectedWeather([]);
    setIdealTemp(
      activity.min_temp !== undefined && activity.max_temp !== undefined
        ? (parseFloat(activity.min_temp) + parseFloat(activity.max_temp)) / 2
        : 20
    );
    console.log("Actividad cargada en el formulario:", activity);
  }
}, [activity]);

  const uvScaleLabels = ["Bajo", "Moderado", "Alto", "Muy Alto"];

  const handleWeatherToggle = (weatherType) => {
    setSelectedWeather((prevSelected) => {  //If the weather type is already selected, remove it.
      if (prevSelected.includes(weatherType)) {
        return prevSelected.filter((item) => item !== weatherType);
      } else {                              //Otherwise, add it to the array of selected weather types.
        return [...prevSelected, weatherType];
      }
    });
  };
  
  const handleSave = async () => {
    const params = new URLSearchParams({
      id_activity: activityId,
      name: activityName,
      min_temp: parseFloat(idealTemp),
      max_temp: parseFloat(idealTemp),
      wind: windSpeed,
      humidity: humidityValue,
      uv: uvIndex,
    });

    if (selectedWeather.length > 0) {   //Send the array to the API (not necessary if we're not going to use this, but my TOC was urging me to add this functionality. I'm sorry.)
        params.append('weather_preferences', selectedWeather.join(','));
    }

    try {
      const res = await fetch(`/api/modifyActivity?${params.toString()}`);
      console.log("ID de la actividad actual:", activityId);
      console.log("Nombre de la actividad actual:", activity?.name);
      if (!res.ok) throw new Error("Error al guardar la actividad");
      const data = await res.json();
      console.log("Actividad modificada:", data);
      if (onClose) onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    console.log("Actividad cancelada.");
    if (onClose) onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.activity_menu}>
        <label className={styles.custom_field} htmlFor="activityName">
          <input
            type="text"
            id="activityName"
            name="activityName"
            required
            placeholder=" "
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
          <span className={styles.placeholder}> Nombre de la Actividad</span>
          <span className={styles.border} />
        </label>

        <div className={styles.grid_item_2}>
          <b>Temperatura Ideal</b>
        </div>
        <label className={styles.custom_field_2} htmlFor="idealTemp">
          <input
            type="number"
            id="idealTemp"
            name="idealTemp"
            required
            placeholder=" "
            min="-50"
            max="50"
            value={idealTemp}
            onChange={(e) => setIdealTemp(e.target.value)}
          />
          <span className={styles.input_suffix}>ºC</span>
          <span className={styles.border} />
        </label>

        <div className={styles.grid_item_2}>
          <b>Humedad (Opcional)</b>
        </div>
        <label className={styles.custom_field_2} htmlFor="idealHumidity">
          <div className={styles.slider}>
            <input
              type="range"
              id="idealHumidity"
              min="0"
              max="100"
              value={humidityValue}
              onChange={(e) => setHumidityValue(e.target.value)}
            />
            <progress min="0" max="100" value={humidityValue} />
          </div>
          <div className={styles.sliderValue}>{humidityValue}%</div>
        </label>

        <div className={styles.grid_item_2}>
          <b>Preferencia de Rayos UV (Opcional)</b>
        </div>
        <label className={styles.custom_field_2} htmlFor="uvIndexSlider">
          <div className={styles.slider}>
            <input
              type="range"
              id="uvIndexSlider"
              min="0"
              max={uvScaleLabels.length - 1}
              step="1"
              value={uvIndex}
              onChange={(e) => setUvIndex(parseInt(e.target.value, 10))}
            />
            <progress min="0" max={uvScaleLabels.length - 1} value={uvIndex} />
          </div>
          <div className={styles.sliderValue}>{uvScaleLabels[uvIndex]}</div>
        </label>

        <div className={styles.grid_item_2}>
          <b>Velocidad del Viento (Opcional)</b>
        </div>
        <label className={styles.custom_field_2} htmlFor="windSpeedSlider">
          <div className={styles.slider}>
            <input
              type="range"
              id="windSpeedSlider"
              min="0"
              max="50"
              step="5"
              value={windSpeed}
              onChange={(e) => setWindSpeed(parseInt(e.target.value, 10))}
            />
            <progress min="0" max="50" step="5" value={windSpeed} />
          </div>
          <div className={styles.sliderValue}>{windSpeed} km/h</div>
        </label>

        <div className={styles.grid_item_2}>
          <b>Preferencia de Clima (Opcional)</b>
        </div>
        <div className={styles.weather_options_container}>
          <div className={styles.weather_option}>
            <label className={styles.weather_option_label}>Soleado</label>
            <button
              className={`${styles.weather_button} ${selectedWeather.includes("sunny") ? styles.selected: ""}`}
              onClick={() => handleWeatherToggle("sunny")}
            >
              ☀️
            </button>
          </div>

          <div className={styles.weather_option}>
            <label className={styles.weather_option_label}>Lluvia</label>
            <button
              className={`${styles.weather_button} ${selectedWeather.includes("rain") ? styles.selected : ''}`}
              onClick={() => handleWeatherToggle("rain")}
            >
              🌧️
            </button>
          </div>

          <div className={styles.weather_option}>
            <label className={styles.weather_option_label}>Nieve</label>
            <button
              className={`${styles.weather_button} ${selectedWeather.includes("snow") ? styles.selected : ''}`}
              onClick={() => handleWeatherToggle("snow")}
            >
              ❄️
            </button>
          </div>
        </div>

        <div className={styles.double_col_display}>
          <button className={styles.button} onClick={handleCancel}>
            Cancelar
          </button>
          <button className={styles.button} onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}

export default ActivityModification;
