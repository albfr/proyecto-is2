import React from "react";
import ActivityCard from "./ActivityCard";
import styles from "@/styles/perfil/ActivityBoard.module.css";

// MODIFIED: We are now destructuring { onCardClick } from the props object.
// This creates the `onCardClick` variable that was previously "not defined".
export default function ActivityBoard({ onCardClick }) {
  const activities = [
    // ... your activities array remains the same
    {
      id: 0,
      owner: "alferrada2021",
      name: "Salir a trotar",
      max_temp: 25,
      min_temp: 10,
      wind: 20,
      pressure: 1,
      precipitation: 0,
      humidity: 20,
      cloud: true,
      visibility: 100,
      uv: 50,
    },
    {
      id: 1,
      owner: "lelovera2021",
      name: "Hacer jardinería",
      max_temp: 25,
      min_temp: 15,
      wind: 25,
      pressure: 1,
      precipitation: 0,
      humidity: 25,
      cloud: true,
      visibility: 100,
      uv: 50,
    },
    {
      id: 2,
      owner: "josantis2021",
      name: "Pasear al cachupin",
      max_temp: 27,
      min_temp: 10,
      wind: 20,
      pressure: 1,
      precipitation: 0,
      humidity: 15,
      cloud: true,
      visibility: 100,
      uv: 50,
    },
    {
      id: 3,
      owner: "tocontreras2021",
      name: "Faltar a clases",
      max_temp: 50,
      min_temp: -50,
      wind: 0,
      pressure: 0,
      precipitation: 0,
      humidity: 15,
      cloud: true,
      visibility: 100,
      uv: 50,
    },
    {
      id: 4,
      owner: "tocontreras2021",
      name: "Jugar Pokemon Verde Hoja",
      max_temp: 25,
      min_temp: 10,
      wind: 0,
      pressure: 0,
      precipitation: 0,
      humidity: 15,
      cloud: true,
      visibility: 100,
      uv: 50,
    },
  ];

  return (
    <div className={styles.activity_board}>
      {activities.map((activity) => (
        <ActivityCard
          key={activity.id}
          activity={activity}
          onClick={() => onCardClick(activity)}
        />
      ))}
    </div>
  );
}