import React from 'react';
import { alertTypes } from '../../interfaces/misc';

interface IProps {
  title?: string;
  message: string;
  type?: alertTypes;
  centered?: boolean;
}

export default function InfoMessage(props: IProps) {
  const { title, message, type = 'info', centered = false } = props;

  return (
    <div
      className={`info-message info-message--${type} ${
        centered ? 'info-message--centered' : ''
      }`}
    >
      {title && <h5 className="info-message__title">{title}</h5>}
      <p className="info-message__content">{message}</p>
    </div>
  );
}
