import React, { useState, useEffect } from "react";
import styles from "@/styles/perfil/ActivityCard.module.css";

export default function ActivityCard({ activity, onClick }) {
  const [hovered, setHovered] = useState(false);

  /*
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered]);
  */

  const handleDelete = (event) => {
    event.stopPropagation();
    
    console.log(`Eliminar actividad: ${activity.name}`);
  };

  return (
    <div 
      className={styles.card} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
  
      <button className={styles.button} onClick={handleDelete}>
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