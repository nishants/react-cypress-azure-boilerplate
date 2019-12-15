import React from 'react';

export default ({ icon, label, selected }) => {
  return (
    <a
      className={`bottom-bar__button ${
        selected ? 'bottom-bar__button--selected' : ''
      }`}
    >
      <i className={`fas fa-${icon}`} />
      <label>{label}</label>
    </a>
  );
};
