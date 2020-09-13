import React from 'react';
import { Link } from 'react-router-dom';
import { BiCamera } from 'react-icons/bi';

import HeaderActionsNav from './HeaderActionsNav';
import HeaderAccountNav from './HeaderAccountNav';

export default function TheHeader() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="app-header__brand">
          <span className="app-header__logo">
            <BiCamera />
          </span>
          <span className="app-header__brand-name">Instacham</span>
        </Link>
        <HeaderActionsNav />
        <HeaderAccountNav />
      </div>
    </header>
  );
}
