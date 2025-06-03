import React, { useState } from "react";
import ActivityCard from "./ActivityCard";
import styles from "@/styles/perfil/ActivityBoard.module.css";
import ActivityModification from "@/components/perfil/ActivityModification";
import ProfileWrapper from "@/styles/perfil/ProfileWrapper.module.css";

export default function ActivityBoard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.activity_board}>
      <ActivityCard onClick={openModal}/>
      <ActivityModification open={isModalOpen} onClose={closeModal} />
    </div>
  );
}
