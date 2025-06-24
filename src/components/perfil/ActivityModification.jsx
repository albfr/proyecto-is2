import React, { useState, useEffect } from "react";
import styles from "@/styles/perfil/ActivityModification.module.css";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';

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
    }
  }, [activity]);

  const uvScaleLabels = ["Bajo", "Moderado", "Alto", "Muy Alto"];

  const handleWeatherToggle = (weatherType) => {
    setSelectedWeather((prevSelected) => {
      if (prevSelected.includes(weatherType)) {
        return prevSelected.filter((item) => item !== weatherType);
      } else {
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
    if (selectedWeather.length > 0) {
      params.append('weather_preferences', selectedWeather.join(','));
    }
    try {
      const res = await fetch(`/api/modifyActivity?${params.toString()}`);
      if (!res.ok) throw new Error("Error al guardar la actividad");
      await res.json();
      if (onClose) onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCancel = () => {
    if (onClose) onClose();
  };

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.activity_menu}>
        <label className={styles.animatedField} htmlFor="activityName">
          <input type="text" id="activityName" name="activityName" required placeholder=" " value={activityName} onChange={(e) => setActivityName(e.target.value)} />
          <span className={styles.placeholder}>Nombre de la Actividad</span>
          <span className={styles.border} />
        </label>
        <label className={styles.animatedField} htmlFor="idealTemp">
          <input type="number" id="idealTemp" name="idealTemp" required placeholder=" " min="-50" max="50" value={idealTemp} onChange={(e) => setIdealTemp(e.target.value)} />
          <span className={styles.input_suffix}>ºC</span>
          <span className={styles.placeholder}>Temperatura Ideal</span>
          <span className={styles.border} />
        </label>
        <div className={styles.formRow}>
          <label className={styles.fieldLabel} htmlFor="idealHumidity">Humedad (Opcional)</label>
          <div className={styles.sliderContainer}>
            <input type="range" id="idealHumidity" className={styles.slider} min="0" max="100" value={humidityValue} onChange={(e) => setHumidityValue(e.target.value)} />
            <span className={styles.sliderValue}>{humidityValue}%</span>
          </div>
        </div>
        <div className={styles.formRow}>
          <label className={styles.fieldLabel} htmlFor="uvIndexSlider">Preferencia de Rayos UV (Opcional)</label>
          <div className={styles.sliderContainer}>
            <input type="range" id="uvIndexSlider" className={styles.slider} min="0" max={uvScaleLabels.length - 1} step="1" value={uvIndex} onChange={(e) => setUvIndex(parseInt(e.target.value, 10))} />
            <span className={styles.sliderValue}>{uvScaleLabels[uvIndex]}</span>
          </div>
        </div>
        <div className={styles.formRow}>
          <label className={styles.fieldLabel} htmlFor="windSpeedSlider">Velocidad del Viento (Opcional)</label>
          <div className={styles.sliderContainer}>
            <input type="range" id="windSpeedSlider" className={styles.slider} min="0" max="50" step="5" value={windSpeed} onChange={(e) => setWindSpeed(parseInt(e.target.value, 10))} />
            <span className={styles.sliderValue}>{windSpeed} km/h</span>
          </div>
        </div>


        <div className={styles.formRow}>
          <label className={styles.fieldLabel}>Preferencia de Clima (Opcional)</label>
          <div className={styles.weather_options_container}>
            <div className={styles.weather_option}>
              <label className={styles.weather_option_label}>Soleado</label>
              <button
                className={`${styles.weather_button} ${selectedWeather.includes("sunny") ? styles.selected : ""}`}
                onClick={() => handleWeatherToggle("sunny")}
              >
                <WbSunnyOutlinedIcon />
              </button>
            </div>
            <div className={styles.weather_option}>
              <label className={styles.weather_option_label}>Lluvia</label>
              <button
                className={`${styles.weather_button} ${selectedWeather.includes("rain") ? styles.selected : ""}`}
                onClick={() => handleWeatherToggle("rain")}
              >
                <WaterDropOutlinedIcon />
              </button>
            </div>
            <div className={styles.weather_option}>
              <label className={styles.weather_option_label}>Nieve</label>
              <button
                className={`${styles.weather_button} ${selectedWeather.includes("snow") ? styles.selected : ""}`}
                onClick={() => handleWeatherToggle("snow")}
              >
                <AcUnitOutlinedIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonSecondary} onClick={handleCancel}>
            Cancelar
          </button>
          <button className={styles.buttonPrimary} onClick={handleSave}>
            Guardar
          </button>
        </div>
      </div>
    </>
  );
}

export default ActivityModification;