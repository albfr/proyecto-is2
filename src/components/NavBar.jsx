import React from 'react';
import AutomaticLocation from './AutomaticLocation';

function NavBar() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#f5f5f5',
      padding: '0 2rem',
      borderBottom: '1px solid #ccc',
      position: 'sticky',
      top: 0,
      width: '94.3vw',
      zIndex: 1000,
      height: '70px',
    }}>
      <div style={{ flex: 1 }}>
        <AutomaticLocation />
      </div>

      <div style={{ flex: 1, textAlign: 'center' }}>
        <img src="./logo.png" alt="Logo" style={{ height: '50px', objectFit: 'contain' }} />
      </div>

      <div style={{ flex: 1, textAlign: 'right' }}>
        <button style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}>
          <img
            src="/usuario.png"
            alt="User"
            style={{ height: '40px', width: '40px', borderRadius: '50%', objectFit: 'cover' }}
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
