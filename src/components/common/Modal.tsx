import React, { ReactNode } from "react";
import styled from "styled-components";

const StModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StModal = styled.div<{ width?: string; height?: string }>`
  display: inline-block;
  width: ${({ width }) => (width ? `${width}px` : "400px")};
  height: ${({ height }) => (height ? `${height}px` : "400px")};
  padding: 1rem;
  background-color: white;
`;

interface IModalProps {
  children?: ReactNode;
  setIsModalOpen?: () => void;
  width?: string;
  height?: string;
}

const Modal = ({ children, setIsModalOpen, width, height }: IModalProps) => {
  return (
    <StModalBackground onClick={setIsModalOpen}>
      <StModal
        onClick={(e) => e.stopPropagation()}
        width={width}
        height={height}
      >
        {children}
      </StModal>
    </StModalBackground>
  );
};

export default Modal;
