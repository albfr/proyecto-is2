import React from 'react';
import styles from '@/styles/PaginationDot.module.css'

function PaginationDot({ id, name, value, checked, onChange }) {    //Receives props to control the radio button.
  return (
    <div className={styles.radio_button}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange} //Pass change handler
      />
      <div className={styles.radio_tile} />
    </div>
  );
}

export default PaginationDot;