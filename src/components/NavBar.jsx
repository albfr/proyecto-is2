import React from 'react';
import { useRouter } from 'next/router';
import styles from '@/styles/NavBar.module.css';

function NavBar() {
  const router = useRouter();

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

      <div className={styles.right}>
        <button className={styles.userButton} onClick={PerfilLoad}>
          <img src="/usuario.png" alt="User" className={styles.userImg} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
