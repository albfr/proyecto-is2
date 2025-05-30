import React, { useState } from "react";
import styles from "@/styles/perfil/ActivityCard.module.css";
import { CLIENT_STATIC_FILES_RUNTIME_AMP } from "next/dist/shared/lib/constants";

export default function ActivityCard({ activity }) {
  activity = {
    id_activity: 0,
    owner: "josantis2021",
    name: "Correr",
    max_temp: 25,
    min_temp: 10,
    wind: 20,
    pressure: 1,
    precipitation: 0,
    humidity: 20,
    cloud: true,
    visibility: 100,
    uv: 50,
  };
  return (
    <div className={styles.card}>
      <h3>{activity.name}</h3>
      <div className={styles.text}>
        <p>Temperatura ideal: {(activity.min_temp + activity.max_temp) / 2}°C</p>
        <p>Humedad: {activity.humidity}%</p>
      </div>
    </div>
  );
}
