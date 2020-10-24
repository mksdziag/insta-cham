import React, { ReactNode } from 'react';
import Modal, { Styles as ReactModalStyles } from 'react-modal';
Modal.setAppElement('#root');

const customStyles: ReactModalStyles = {
  content: {
    top: '150px',
    left: '50%',
    width: '85%',
    maxWidth: '900px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translateX(-50%)',
  },
};

interface IProps {
  isOpen: boolean;
  handleSearchClose: () => void;
  children: ReactNode;
}

export default function IChModal(props: IProps) {
  const { isOpen, handleSearchClose, children } = props;

  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={handleSearchClose}
    >
      {children}
    </Modal>
  );
}
