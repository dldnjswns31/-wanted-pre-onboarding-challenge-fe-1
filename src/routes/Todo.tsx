import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getTodos } from "../apis/todo";

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

  input {
    width: 100%;
    height: 3rem;
    margin-bottom: 1rem;
    padding: 1rem;
    font-size: 1.2rem;
    font-family: inherit;
  }
  textarea {
    width: 100%;
    height: 10rem;
    margin-bottom: 1rem;
    padding: 1rem;
    resize: none;
    font-size: 1.2rem;
    font-family: inherit;
  }
  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
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

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  section:nth-child(odd) {
    margin-right: 1rem;
  }

  section:nth-child(even) {
    margin-left: 1rem;
  }
`;

const StSectionTitle = styled.h3`
  border-bottom: 1px solid black;
  line-height: 200%;
  font-size: 3rem;
  text-align: center;
`;

const StSection = styled.section`
  width: 500px;
  height: 700px;
  border: 1px solid black;

  div {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const StTodoList = styled.ul`
  padding: 2rem 1rem;
  flex: 9 0;

  li {
    font-size: 1.5rem;
  }
`;

const StAddButton = styled.button`
  flex: 1 0;
  background-color: #017be8;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
`;

const StTodoDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`;

const StTodoTitle = styled.div`
  flex: 1 0;
  font-size: 2rem;
`;

const StTodoContent = styled.div`
  flex: 9 0;
  font-size: 1.5rem;
`;

const Todo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleModalAddButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <>
      {isModalOpen && (
        <StModalBackground onClick={handleModalOpen}>
          <StModal onClick={(e) => e.stopPropagation()}>
            <StModalTitle>New Todo</StModalTitle>
            <StForm>
              <input type="text" placeholder="title" />
              <textarea
                name=""
                id=""
                cols={30}
                rows={5}
                placeholder="content"
              />
              <div>
                <StModalButton name="add" onClick={handleModalAddButton}>
                  Add
                </StModalButton>
                <StModalButton name="cancel" onClick={handleModalOpen}>
                  Cancel
                </StModalButton>
              </div>
            </StForm>
          </StModal>
        </StModalBackground>
      )}

      <StMainContainer>
        <StSection>
          <div>
            <StSectionTitle>List</StSectionTitle>
            <StTodoList>
              <li>todo 1</li>
              <li>todo 2</li>
              <li>투두 3</li>
            </StTodoList>
            <StAddButton onClick={handleModalOpen}>Add Todo</StAddButton>
          </div>
        </StSection>
        <StSection>
          <div>
            <StSectionTitle>Todo</StSectionTitle>
            <StTodoDetail>
              <StTodoTitle>Todo Title</StTodoTitle>
              <StTodoContent>Todo Content</StTodoContent>
            </StTodoDetail>
          </div>
        </StSection>
      </StMainContainer>
    </>
  );
};

export default Todo;
