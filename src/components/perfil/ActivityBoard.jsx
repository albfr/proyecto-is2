import React from "react";
import ActivityCard from "./ActivityCard";
import styles from "@/styles/perfil/ActivityBoard.module.css";
import ActivityModification from "@/components/perfil/ActivityModification";

export default function ActivityBoard({ activities }) {
  //const [selectedActivity, setSelectedActivity] = useState(null);

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