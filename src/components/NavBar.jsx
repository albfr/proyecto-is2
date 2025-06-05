import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/NavBar.module.css';

import LogButton from "@/components/home/LogButton";

import { useSession } from "next-auth/react";

function NavBar() {
  const router = useRouter();

  const { data: session } = useSession();

  const PerfilLoad = () => {
    router.push('/perfil');
  };
    const MenuLoad = () => {
    router.push('/');
  };

  return (
    <div className={styles.navbar}>

      <div className={styles.center}>
        <button className={styles.userButton} onClick={MenuLoad}>
          <img src="./logo.png" alt="Logo" className={styles.logo} />
        </button>
      </div>

      <LogButton />

      {!session &&
      <div className={styles.right}>
        <button className={styles.userButton} onClick={PerfilLoad}>
          <img src="/usuario.png" alt="User" className={styles.userImg} />
        </button>
      </div>
      }
      {session &&
      <div className={styles.right}>
        <button className={styles.userButton} onClick={PerfilLoad}>
          <img src={session.user.image} alt="User" className={styles.userImg} />
        </button>
      </div>
      }
    </div>
  );
}

export default NavBar;
