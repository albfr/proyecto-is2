import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityModification from "@/components/perfil/ActivityModification";
import Index from "@/styles/Index.module.css";
import ProfileWrapper from "@/styles/perfil/ProfileWrapper.module.css";
import ActivityBoard from '@/components/perfil/ActivityBoard';

export default function Perfil() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={Index.screenWrapper}>
        <NavBar />
      </div>
      <div>
        <ActivityBoard/>
      </div>
    </>
  );
}