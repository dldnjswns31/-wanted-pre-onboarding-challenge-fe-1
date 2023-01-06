import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes, useMatch } from "react-router-dom";
import styled from "styled-components";
import { createTodo, getTodos } from "../apis/todo";
import TodoDetail from "../components/todo/TodoDetail";
import { INewTodo, ITodo } from "../types/todo";

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
  const [todoForm, setTodoForm] = useState<INewTodo>({
    title: "",
    content: "",
  });
  const [todoList, setTodoList] = useState<null | ITodo[]>(null);

  const todoRouteMatch = useMatch("/");

  useEffect(() => {
    getTodos().then((data) => setTodoList(data.data));
  }, []);

  const handleModalOpen = () => {
    if (isModalOpen) {
      setTodoForm({ title: "", content: "" });
    }
    setIsModalOpen((prev) => !prev);
  };

  const handleTodoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todoForm)
      .then(() => setIsModalOpen((prev) => !prev))
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

  return (
    <>
      {isModalOpen && (
        <StModalBackground onClick={handleModalOpen}>
          <StModal onClick={(e) => e.stopPropagation()}>
            <StModalTitle>New Todo</StModalTitle>
            <StForm onSubmit={handleTodoSubmit}>
              <StModalTodoTitle
                type="text"
                name="title"
                placeholder="title"
                onChange={handleFormChange}
              />
              <StModalTodoContent
                name="content"
                placeholder="content"
                onChange={handleFormChange}
              />
              <div>
                <StModalButton name="add">Add</StModalButton>
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
              <Route path=":id" element={<TodoDetail />} />
            </Routes>
          </div>
        </StSection>
      </StMainContainer>
    </>
  );
};

export default Todo;
