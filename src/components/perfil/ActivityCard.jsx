import React, { useState, useEffect } from "react";
import styles from "@/styles/perfil/ActivityCard.module.css";
//import { CLIENT_STATIC_FILES_RUNTIME_AMP } from "next/dist/shared/lib/constants";

export default function ActivityCard({ activity, onClick }) {
  const [hovered, setHovered] = useState(false);

  console.log("HOLA", activity);
 
  useEffect(() => {
    document.body.style.cursor = hovered ? 'pointer' : 'auto'
  }, [hovered]);

  return (
    <div 
      className={styles.card} 
      onPointerOver={() => setHovered(true)} 
      onPointerOut={() => setHovered(false)}
      onClick={onClick}
    >
      
      <h3>{activity.name}</h3>
      <div className={styles.text}>
        <p>Temperatura ideal: {(activity.min_temperature + activity.max_temperature) / 2}°C</p>
        <p>Humedad: {activity.humidity}%</p>
      </div>
    </div>
  );
}
