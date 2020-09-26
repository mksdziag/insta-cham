import React from 'react';

export default function UserImageLink() {
  return (
    <div className="user-rounded-image-link">
      <div className="user-rounded-image-link__image-holder">
        <img
          src="https://images.unsplash.com/photo-1601110834637-010c1db7ddc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
          alt=""
        />
      </div>
      <span className="user-rounded-image-link__text">Mackentaya</span>
    </div>
  );
}
