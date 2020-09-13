import React from 'react';

import Router from '../../Router/Routes';

import TheFooter from './TheFooter';
import TheHeader from './TheHeader';

export default function BaseLayout() {
  return (
    <>
      <TheHeader />
      <div className="container router-wrapper">
        <Router />
      </div>
      <TheFooter />
    </>
  );
}
