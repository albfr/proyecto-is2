import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import styles from "@/styles/perfil/ActivityBoard.module.css";
import ActivityModification from "@/components/perfil/ActivityModification";

export default function ActivityBoard({ activities }) {
  const [selectedActivity, setSelectedActivity] = useState(null);
  
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
