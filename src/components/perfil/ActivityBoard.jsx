import React, { useState } from "react";
import ActivityModification from "./ActivityModification"
import ActivityCard from "./ActivityCard"
import styles from "@/styles/perfil/ActivityBoard.module.css";

export default function ActivityBoard() {
    let totalActivities = 5;

    return(
        <div className={styles.activity_board}>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
            <ActivityCard/>
        </div>
    );
}