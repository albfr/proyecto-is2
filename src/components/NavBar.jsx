import React from 'react';
import AutomaticLocation from './AutomaticLocation';
// import BarLogo from '../assets/logo.png';
// import User from '../assets/usuario.png';



function NavBar() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: '1rem 2rem',
      borderBottom: '1px solid #ccc',
      position: 'sticky',
      top: 0,
      width: '100%',
      zIndex: 1000,
    }}>
      <div style={{ flex: 1 }}>
        <AutomaticLocation />
      </div>

      <div style={{ flex: 1, textAlign: 'center' }}>
        <img src="./logo.png"  style={{ height: '40px' }} />
      </div>

      <div style={{ flex: 1, textAlign: 'right' }}>
        <button style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
        }}>
          <img
            src="/usuario.png"
            style={{ height: '40px', width: '40px', borderRadius: '50%' }}
          />
        </button>
      </div>
    </div>
  );
}

export default NavBar;
