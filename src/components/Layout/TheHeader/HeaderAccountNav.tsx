import React from 'react';
import { Link } from 'react-router-dom';
import { BiMessage } from 'react-icons/bi';
import IconCircleButton from '../../Shared/Buttons/IconCircleButton';
import AvatarLink from '../../Shared/Avatar/AvatarLink';

const fakeLoggedUser = {
  id: 'andrew1',
  userName: 'andrew',
  firstName: 'Benito',
  lastName: 'Ramonez',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corporis ex facilis, molestiae dignissimos hic minima! Praesentium, laboriosam fugiat. Sit reprehenderit deserunt ducimus quia fugiat eaque vitae officiis architecto est.',
  email: 'beniorami@yahoop.com',
  created: 1601211170263,
  active: true,
  avatar: {
    id: '2131203',
    description: 'Maks',
    url: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
  },
};

export default function Search() {
  return (
    <ul className="header-actions-nav__list">
      <li className="header-actions-nav__list-item">
        <IconCircleButton to="/messages">
          <BiMessage />
        </IconCircleButton>
      </li>
      <li className="header-actions-nav__list-item">
        <AvatarLink to="/my-profile" user={fakeLoggedUser} size="small" />
      </li>
    </ul>
  );
}
