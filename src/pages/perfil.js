import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityBar from "@/components/perfil/ActivityBar";
import ActivityBoard from '@/components/perfil/ActivityBoard';
import IndexStyles from "@/styles/Index.module.css";
import ProfileLayoutStyles from "@/styles/perfil/ProfileLayout.module.css";

export default function Perfil() {
  return (
    <>
      <div className={IndexStyles.screenWrapper}>
        <NavBar />
      </div>

      <div className={ProfileLayoutStyles.profileContainer}>
        <ActivityBar />
        <ActivityBoard />
      </div>

      {
      }
    </>
  );
}
