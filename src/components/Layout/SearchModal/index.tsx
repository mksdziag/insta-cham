import React from 'react';
import IChModal from '../../Shared/Modal/index';

interface IProps {
  isOpen: boolean;
  handleSearchClose: () => void;
}

export default function SearchModal(props: IProps) {
  const { isOpen, handleSearchClose } = props;

  return (
    <IChModal isOpen={isOpen} handleSearchClose={handleSearchClose}>
      <div>SearchModalContent</div>
    </IChModal>
  );
}
