import React from 'react';
import { BiHomeCircle, BiSearch, BiShoppingBag, BiHeart } from 'react-icons/bi';
import IconCircleButton from '../../Shared/Buttons/IconCircleButton';

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
          <IconCircleButton to="/">
            <BiHomeCircle />
          </IconCircleButton>
        </li>
        <li className="header-actions-nav__list-item">
          <IconCircleButton onClick={handleSearchOpen}>
            <BiSearch />
          </IconCircleButton>
        </li>
        <li className="header-actions-nav__list-item">
          <IconCircleButton to="/">
            <BiShoppingBag />
          </IconCircleButton>
        </li>
        <li className="header-actions-nav__list-item">
          <IconCircleButton to="/my-profile">
            <BiHeart />
          </IconCircleButton>
        </li>
      </ul>
    </nav>
  );
}
