import React, { useState } from "react";
import styles from "@/styles/perfil/ActivityModification.module.css";


//INTENTÉ PONER CADA TIPO DE USER INPUT EN DISTINTOS ARCHIVOS, PERO POR ALGUNA RAZÓN TODO EL CSS SE DESTRUIA T-T
//Si quiere, el Cano me puede ayudar a Reactificar todo esto. Traté de que se viera lo más ordenado posible.

function ActivityModification({ activity, open, onClose }) {
  if (!open) return null;

  const [activityName, setActivityName] = useState(activity?.name || "");
  const [humidityValue, setHumidityValue] = useState(50);
  const [uvIndex, setUvIndex] = useState(activity?.uv_index || 0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [idealTemp, setIdealTemp] = useState(20);

  const uvScaleLabels = ["Bajo", "Moderado", "Alto", "Muy Alto"];

  const handleSave = async () => {
  const params = new URLSearchParams({
    name: activityName,
    min_temp: parseFloat(idealTemp),
    max_temp: parseFloat(idealTemp),
    wind: windSpeed,
    humidity: humidityValue,
    uv: uvIndex,
  });

  try {
    const res = await fetch(`/api/addActivity?${params.toString()}`);
    if (!res.ok) throw new Error("Error al guardar la actividad");
    const data = await res.json();
    console.log("Actividad agregada:", data);
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
