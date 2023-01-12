import React, { useState } from "react";
import styled from "styled-components";
import { createTodo } from "../../apis/todo";
import { IModalProps, INewTodo } from "../../types/apis/todo";

const StModalBackground = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
`;

const StModal = styled.div`
  display: inline-block;
  width: 400px;
  height: 400px;
  padding: 1rem;
  background-color: white;
`;

const StModalTitle = styled.h3`
  width: 100%;
  height: 20%;
  font-size: 3rem;
  text-align: center;
`;

const StForm = styled.form`
  width: 100%;
  height: 80%;
  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const StModalTodoTitle = styled.input`
  width: 100%;
  height: 3rem;
  margin-bottom: 1rem;
  padding: 1rem;
  font-size: 1.2rem;
  font-family: inherit;
`;

const StModalTodoContent = styled.textarea`
  width: 100%;
  height: 10rem;
  margin-bottom: 1rem;
  padding: 1rem;
  resize: none;
  font-size: 1.2rem;
  font-family: inherit;
`;

const StModalButton = styled.button`
  width: 175px;
  height: 3rem;
  border: none;
  background-color: ${({ name }) => (name === "add" ? "#017be8" : "#cccccc")};
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
`;

const Modal = ({
  setIsModalOpen,
  getTodoList,
  handleModalOpen,
}: IModalProps) => {
  const [todoForm, setTodoForm] = useState<INewTodo>({
    title: "",
    content: "",
  });

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todoForm)
      .then(() => {
        setIsModalOpen((prev) => !prev);
        getTodoList();
      })
      .catch((err) => console.log(err));
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.currentTarget;
    if (name === "title") {
      setTodoForm((prev) => ({ ...prev, title: e.target.value }));
    }
    if (name === "content") {
      setTodoForm((prev) => ({ ...prev, content: e.target.value }));
    }
  };

  const handleCancelClick = () => {
    handleModalOpen();
    setTodoForm({ title: "", content: "" });
  };

  return (
    <StModalBackground onClick={handleModalOpen}>
      <StModal onClick={(e) => e.stopPropagation()}>
        <StModalTitle>New Todo</StModalTitle>
        <StForm onSubmit={handleTodoSubmit}>
          <StModalTodoTitle
            type="text"
            name="title"
            placeholder="title"
            onChange={handleFormChange}
            autoFocus
          />
          <StModalTodoContent
            name="content"
            placeholder="content"
            onChange={handleFormChange}
          />
          <div>
            <StModalButton name="add">Add</StModalButton>
            <StModalButton name="cancel" onClick={handleCancelClick}>
              Cancel
            </StModalButton>
          </div>
        </StForm>
      </StModal>
    </StModalBackground>
  );
};

export default Modal;
