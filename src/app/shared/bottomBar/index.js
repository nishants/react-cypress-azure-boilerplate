import React from 'react';
import BottoBarButton from './bottoBarButton';

export default () => {
  return (
    <nav className="bottom-bar">
      <BottoBarButton label="Products" icon="home" selected />
      <BottoBarButton label="My Orders" icon="shopping-bag" />
    </nav>
  );
};
