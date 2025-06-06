import * as React from 'react';
import styles from '@/styles/perfil/AddButton.module.css';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function AddButton({ onClick }) {
  return (
    <Box className={styles.AddButton}>
      <Fab color="primary" aria-label="add" onClick={onClick}>
        <AddIcon />
      </Fab>
    </Box>
  );
}