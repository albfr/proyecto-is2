import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityBar from "@/components/perfil/ActivityBar";
import ActivityBoard from '@/components/perfil/ActivityBoard';
import IndexStyles from "@/styles/Index.module.css";
import ProfileLayoutStyles from "@/styles/perfil/ProfileLayout.module.css";
import AddButton from '@/components/perfil/AddButton';
import ActivityModification from '@/components/perfil/ActivityModification';
import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
  return { props: { session } };
}

export default function Perfil({ session }) {
  const [activeModal, setActiveModal] = useState(null);

  const openCreateModal = () => {
    setActiveModal('new');
  };

  const openEditModal = (activity) => {
    setActiveModal(activity);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <div className={IndexStyles.screenWrapper}>
        <NavBar />
      </div>

      <div className={ProfileLayoutStyles.profileContainer}>
        <ActivityBar />
        <ActivityBoard session={session} onCardClick={openEditModal} />
      </div>

      {!activeModal && <AddButton onClick={openCreateModal} />}
      
      <ActivityModification 
        open={!!activeModal}
        onClose={closeModal} 
        activity={activeModal === 'new' ? null : activeModal}
      />
    </>
  );
}