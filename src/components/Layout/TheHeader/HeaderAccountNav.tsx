import React from 'react';
import { Link } from 'react-router-dom';
import { BiMessage } from 'react-icons/bi';

export default function Search() {
  return (
    <ul className="header-actions-nav__list">
      <li className="header-actions-nav__list-item">
        <Link to="/messages" className="header-actions-nav__list-link">
          <BiMessage />
        </Link>
      </li>
      <li className="header-actions-nav__list-item">
        <Link
          to="/my-profile"
          className="header-actions-nav__list-link header-actions-nav__list-link--image"
        >
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            alt="user avatar"
          />
        </Link>
      </li>
    </ul>
  );
}
