import React from "react";
import styled from "styled-components";

const StMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  font-size: 1.5rem;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 30%;
`;

const StButton = styled.button<{ name: "yes" | "no" }>`
  width: 7.5rem;
  height: 2.5rem;
  border: none;
  background-color: ${({ name }) => (name === "yes" ? "#017be8" : "red")};
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
`;

interface IDeleteTodoModalProps {
  handleYesClick: () => void;
  handleNoClick: () => void;
}

const DeleteTodoModal = ({
  handleYesClick,
  handleNoClick,
}: IDeleteTodoModalProps) => {
  return (
    <>
      <StMessage>
        <span>정말 삭제하시겠습니까?</span>
      </StMessage>
      <StButtonContainer>
        <StButton name="yes" onClick={handleYesClick}>
          Yes
        </StButton>
        <StButton name="no" onClick={handleNoClick}>
          No
        </StButton>
      </StButtonContainer>
    </>
  );
};

export default DeleteTodoModal;
