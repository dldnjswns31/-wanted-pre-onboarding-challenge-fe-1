import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import { getTodos } from "../apis/todo";
import Modal from "../components/todo/Modal";
import TodoDetail from "../components/todo/TodoDetail";
import { INewTodo, ITodo } from "../types/todo";

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
  border-bottom: 1px solid black;
  line-height: 200%;
  font-size: 3rem;
  text-align: center;
`;

const StSelectHelper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  text-align: center;
`;

const StSection = styled.section`
  width: 500px;
  height: 700px;
  border: 1px solid black;

  > div {
    display: inline-flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
`;

const StTodoList = styled.ul`
  padding: 2rem 1rem;
  flex: 9 0;

  > a {
    color: black;
    text-decoration: none;
  }
`;

const StTodo = styled.li`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #999999;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<null | ITodo[]>(null);

  const todoRouteMatch = useMatch("/");

  const getTodoList = () => {
    getTodos().then((data) => setTodoList(data.data));
  };

  useEffect(() => {
    getTodoList();
  }, []);

  const handleModalOpen = () => {
    // if (isModalOpen) {
    //   setTodoForm({ title: "", content: "" });
    // }
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          getTodoList={getTodoList}
          handleModalOpen={handleModalOpen}
        />
      )}

      <StMainContainer>
        <StSection>
          <div>
            <StSectionTitle>List</StSectionTitle>
            <StTodoList>
              {todoList &&
                todoList?.map((todo) => (
                  <Link key={todo.id} to={`/${todo.id}`}>
                    <StTodo>{todo.title}</StTodo>
                  </Link>
                ))}
            </StTodoList>
            <StAddButton onClick={handleModalOpen}>Add Todo</StAddButton>
          </div>
        </StSection>
        <StSection>
          <div>
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
          </div>
        </StSection>
      </StMainContainer>
    </>
  );
};

export default Todo;
