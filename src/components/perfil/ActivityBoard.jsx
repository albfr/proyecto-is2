import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import styles from "@/styles/perfil/ActivityBoard.module.css";
import ActivityBar from "./ActivityBar";
import ActivityModification from "@/components/perfil/ActivityModification";
import ProfileWrapper from "@/styles/perfil/ProfileWrapper.module.css";
import {useSession} from "next-auth/react";

export default function ActivityBoard() {
  const {data: session} = useSession();
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const obtenerActivities = async (email) => {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3000/api/activities?email=${email}`);
      const data = await res.json();
      setActivities(data);
      setError(null);
    } catch(e) {
      console.error("Error al obtener actividades:", e);
      setError(e.message);
      setActivities([]);
    } finally {
      setLoading(false);
    }
  };
  if(!loading && !error) {
    obtenerActivities("cano28")
    console.log(loading, error);
  }
  console.log(activities);
  /*
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
  */
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
