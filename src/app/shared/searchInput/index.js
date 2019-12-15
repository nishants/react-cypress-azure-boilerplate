import React from 'react';

export default ({ onChange }) => {
  return (
    <div className="search-input">
      <input placeholder="Search by product name" onChange={onChange} />
      <i className="fas fa-search" />
    </div>
  );
};
