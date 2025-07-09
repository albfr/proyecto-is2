import React, { useState, useEffect } from "react";
import styles from "@/styles/perfil/ActivityCard.module.css";

export default function ActivityCard({ activity, onClick }) {
  const [hovered, setHovered] = useState(false);

  /*
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered]);
  */

const handleDelete = async (event) => {
  event.stopPropagation();

  try {
    const res = await fetch(`/api/deleteActivity?id_activity=${activity.id_activity}`, {
      method: 'DELETE',
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Respuesta del servidor:", errorText);
      throw new Error("Error al eliminar la actividad");
    }

    window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};


  return (
    <div 
      className={styles.card} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
  
      <button className={styles.button} onClick={(e) => handleDelete(e)}>
        x
      </button>

      <h3 className={styles.title}>{activity.name}</h3>
      <div className={styles.text}>
        <p>Temperatura ideal: {(activity.min_temperature + activity.max_temperature) / 2}°C</p>
        <p>Humedad: {activity.humidity}%</p>
      </div>
    </div>
  );
}