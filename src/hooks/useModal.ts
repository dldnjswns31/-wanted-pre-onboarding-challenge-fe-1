import React, { useState } from "react";

interface useModalReturnType {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
}

/**
 *
 * @returns {상태, 상태갱신함수, 상태갱신토글}
 */
const useModal = (): useModalReturnType => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return { isModalOpen, setIsModalOpen, toggleModal };
};

export default useModal;
