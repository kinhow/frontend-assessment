import { useState } from 'react';

const useToggleModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  return { isModalOpen, handleModalOpen, handleModalClose };
};

export default useToggleModal;
