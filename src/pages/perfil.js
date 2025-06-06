import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityBar from "@/components/perfil/ActivityBar";
import ActivityBoard from '@/components/perfil/ActivityBoard';
import IndexStyles from "@/styles/Index.module.css";
import ProfileLayoutStyles from "@/styles/perfil/ProfileLayout.module.css";
import AddButton from '@/components/perfil/AddButton';
import ActivityModification from '@/components/perfil/ActivityModification';
import { getSession } from "next-auth/react";
import { getActivitiesFromUser } from '@/lib/query/getActivities';

export const getServerSideProps = ( async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }
<<<<<<< HEAD
  return { props: { session } };
}

export default function Perfil({ session }) {
  const [activeModal, setActiveModal] = useState(null);

  const openCreateModal = () => {
    setActiveModal('new');
  };

  const openEditModal = (activity) => {
    setActiveModal(activity);
=======

  const email = session.user.email;
  const activities = await getActivitiesFromUser(email);

  return {
    props: { session, activities }
  };
});

export default function Perfil({ session, activities }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log("PERFIL ACTIVITIES", session, activities);
  const openModal = () => {
    setIsModalOpen(true);
>>>>>>> dev
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
<<<<<<< HEAD
        <ActivityBoard session={session} onCardClick={openEditModal} />
      </div>

      {!activeModal && <AddButton onClick={openCreateModal} />}
      
      <ActivityModification 
        open={!!activeModal}
        onClose={closeModal} 
        activity={activeModal === 'new' ? null : activeModal}
      />
=======
        <ActivityBoard activities={activities}/>
      </div>
>>>>>>> dev
    </>
  );
}