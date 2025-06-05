import React, { useState } from 'react';
import NavBar from "@/components/NavBar";
import ActivityBar from "@/components/perfil/ActivityBar";
import ActivityBoard from '@/components/perfil/ActivityBoard';
import IndexStyles from "@/styles/Index.module.css";
import ProfileLayoutStyles from "@/styles/perfil/ProfileLayout.module.css";

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