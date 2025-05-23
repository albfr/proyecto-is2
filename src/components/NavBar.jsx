import React from 'react';
import styles from '@/styles//NavBar.module.css';

function NavBar() {
  return (
    <div className={styles.navbar}>

      <div className={styles.center}>
        <img src="./logo.png" alt="Logo" className={styles.logo} />
      </div>

      <div className={styles.right}>
        <button className={styles.userButton}>
          <img src="/usuario.png" alt="User" className={styles.userImg} />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
