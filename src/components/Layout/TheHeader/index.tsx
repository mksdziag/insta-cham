import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiCamera } from 'react-icons/bi';

import HeaderActionsNav from './HeaderActionsNav';
import HeaderAccountNav from './HeaderAccountNav';
import SearchModal from '../SearchModal/index';

export default function TheHeader() {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  function handleSearchOpen() {
    setSearchIsOpen(true);
  }
  function handleSearchClose() {
    setSearchIsOpen(false);
  }

  return (
    <>
      <header className="app-header">
        <div className="app-header__inner">
          <Link to="/" className="app-header__brand">
            <span className="app-header__brand-name">Instacham</span>
          </Link>
          <HeaderActionsNav handleSearchOpen={handleSearchOpen} />
          <HeaderAccountNav />
        </div>
      </header>
      <SearchModal
        isOpen={searchIsOpen}
        handleSearchClose={handleSearchClose}
      />
    </>
  );
}
