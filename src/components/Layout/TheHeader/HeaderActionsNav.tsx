import React from 'react';
import { Link } from 'react-router-dom';
import { BiHomeCircle, BiSearch, BiShoppingBag, BiHeart } from 'react-icons/bi';

interface IProps {
  handleSearchOpen: () => void;
  handleSearchClose?: () => void;
}

export default function HeaderActionsNav(props: IProps) {
  const { handleSearchOpen } = props;

  return (
    <nav className="header-actions-nav">
      <ul className="header-actions-nav__list">
        <li className="header-actions-nav__list-item">
          <Link to="/" className="header-actions-nav__list-link">
            <BiHomeCircle />
          </Link>
        </li>
        <li className="header-actions-nav__list-item">
          <span
            onClick={handleSearchOpen}
            className="header-actions-nav__list-link"
          >
            <BiSearch />
          </span>
        </li>
        <li className="header-actions-nav__list-item">
          <Link to="/" className="header-actions-nav__list-link">
            <BiShoppingBag />
          </Link>
        </li>
        <li className="header-actions-nav__list-item">
          <Link to="/" className="header-actions-nav__list-link">
            <BiHeart />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
