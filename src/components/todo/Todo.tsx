import React, { useEffect, useState } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";

import { getTodos } from "../../apis/todo";
import useModal from "../../hooks/useModal";
import { isLoginState } from "../../recoil/atoms";
import { ITodo } from "../../types/apis/todo";
import { removeToken } from "../../utils/authToken";
import Modal from "../common/Modal";

import AddTodoModal from "./AddTodoModal";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";

const StMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  > section:nth-child(odd) {
    margin-right: 1rem;
  }

  > section:nth-child(even) {
    margin-left: 1rem;
  }
`;

const StSectionTitle = styled.h3`
  position: relative;
  border-bottom: 1px solid black;
  line-height: 200%;
  font-size: 3rem;
  text-align: center;
`;

const StSelectHelper = styled.div`
  flex: 1 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  text-align: center;
`;

const StSection = styled.section`
  width: 500px;
  min-width: 500px;
  height: 700px;
  border: 1px solid black;

  display: inline-flex;
  flex-direction: column;
`;

const StLogout = styled.button`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 1.5rem;
  font-family: inherit;
`;

const StAddButton = styled.button`
  flex: 1 0;
  background-color: #017be8;
  border: none;
  color: white;
  font-size: 1.5rem;
  font-family: inherit;
`;

const Todo = () => {
  const [todoList, setTodoList] = useState<null | ITodo[]>(null);
  const { isModalOpen, setIsModalOpen, toggleModal } = useModal();

  const setIsLogin = useSetRecoilState(isLoginState);
  const todoRouteMatch = useMatch("/");
  const navigate = useNavigate();

  const getTodoList = () => {
    getTodos().then((data) => setTodoList(data.data));
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const handleLogoutClick = () => {
    const returnValue = window.confirm("???????????? ???????????????????");
    if (returnValue) {
      setIsLogin(false);
      removeToken();
      navigate("/auth");
    }
  };

  return (
    <>
      {isModalOpen && (
        <Modal setIsModalOpen={toggleModal}>
          <AddTodoModal
            getTodoList={getTodoList}
            setIsModalOpen={setIsModalOpen}
          />
        </Modal>
      )}

      <StMainContainer>
        <StSection>
          <StSectionTitle>
            <StLogout onClick={handleLogoutClick}>Logout</StLogout> List
          </StSectionTitle>
          <TodoList todoList={todoList} />
          <StAddButton onClick={toggleModal}>Add Todo</StAddButton>
        </StSection>
        <StSection>
          <StSectionTitle>Todo</StSectionTitle>
          {todoRouteMatch && (
            <StSelectHelper>
              <span>Select your todo</span>
            </StSelectHelper>
          )}
          <Routes>
            <Route
              path=":id"
              element={<TodoDetail getTodoList={getTodoList} />}
            />
          </Routes>
        </StSection>
      </StMainContainer>
    </>
  );
};

export default Todo;
