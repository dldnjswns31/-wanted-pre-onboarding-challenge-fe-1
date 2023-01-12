import React, { useState } from "react";

type Modal = [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  () => void
];

const useModal = (): Modal => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return [isOpen, setIsOpen, toggleModal];
};

export default useModal;
