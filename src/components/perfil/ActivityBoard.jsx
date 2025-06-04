import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import styles from "@/styles/perfil/ActivityBoard.module.css";
import ActivityModification from "@/components/perfil/ActivityModification";
import ProfileWrapper from "@/styles/perfil/ProfileWrapper.module.css";

export default function ActivityBoard() {
  const [selectedActivity, setSelectedActivity] = useState(null);
  
  const activities = [
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
  ];

  const openModal = (activity) => {
    setSelectedActivity(activity);
  };
  
  const closeModal = () => {
    setSelectedActivity(null);
  };

  return (
    <div className={styles.activity_board}>
      {activities.map((activity) => (
        <ActivityCard
          activity={activity}
          onClick={() => openModal(activity)}
        />
      ))}

      {selectedActivity && (
        <ActivityModification
          activity={selectedActivity}
          open={true}
          onClose={closeModal}
        />
      )}
    </div>
  );
}
