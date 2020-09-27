import React from 'react';

import Router from '../../router/Routes';

import TheFooter from './TheFooter';
import TheHeader from './TheHeader';

export default function BaseLayout() {
  return (
    <>
      <TheHeader />
      <div className="container-wide router-wrapper">
        <Router />
      </div>
      <TheFooter />
    </>
  );
}
