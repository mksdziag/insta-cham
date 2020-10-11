import React from 'react';

interface IProps {
  url: string;
  description: string;
  size?: 'normal' | 'large' | 'small';
}
// https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg
export default function ProfileImage(props: IProps) {
  const { description, url, size = 'normal' } = props;
  return (
    <div className={`profile-image profile-image--${size}`}>
      <img className="profile-image__img" src={url} alt={description} />
    </div>
  );
}
