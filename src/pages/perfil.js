import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityBar from "@/components/perfil/ActivityBar";
import ActivityModification from "@/components/perfil/ActivityModification";
import Index from "@/styles/Index.module.css";
import ProfileWrapper from "@/styles/ProfileWrapper.module.css";

import { getSession } from "next-auth/react";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default function Perfil({ session }) {
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
  <div className={ProfileWrapper.profile_view}>
        <button onClick={openModal} className={ProfileWrapper.create_button}>Crear Actividad</button>
      {isModalOpen && (
          <div className={ProfileWrapper.modal_overlay} onClick={closeModal}>
            <div
              
              className={ProfileWrapper.modal_content}
              onClick={(e) => e.stopPropagation()}
            >
              <ActivityModification onClose={closeModal}/>
            </div>
          </div>
        )}
      </div> 
    </>
  );
}




/*       <div className={Index.screenWrapper}>
        <NavBar />
      </div>
      <div>
        <ActivityBar />
      </div>
      */
