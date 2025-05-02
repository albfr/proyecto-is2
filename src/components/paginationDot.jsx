import React from 'react';

function PaginationDot({ id, name, value, checked, onChange }) {    //Receives props to control the radio button.
  return (
    <div className="radio-button">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange} //Pass change handler
      />
      <div className="radio-tile" />
    </div>
  );
}

export default PaginationDot;