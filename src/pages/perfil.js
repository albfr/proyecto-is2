import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityBar from "@/components/perfil/ActivityBar";
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
<<<<<<< HEAD
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
=======
      <div>
        <ActivityBoard/>
      </div>
>>>>>>> origin/frontend-Clau
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