import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ITodoList } from "../../types/components/todo";

const StTodoList = styled.ul`
  padding: 2rem 1rem;
  flex: 9 0;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }

  > a {
    color: black;
    text-decoration: none;
  }
`;

const StTodo = styled.li<{ isSelected: boolean }>`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #999999;
  border: ${({ isSelected }) =>
    isSelected ? "1px solid #017be8" : "1px solid #999999"};
  border-radius: 10px;
  background-color: ${({ isSelected }) => isSelected && "#017be8"};
  color: ${({ isSelected }) => isSelected && "white"};
  font-size: 1.5rem;
  cursor: pointer;
`;

const TodoList = ({ todoList, selectedTodo, setSelectedTodo }: ITodoList) => {
  const handleTodoClick = (e: React.MouseEvent<HTMLLIElement>) => {
    if (!(e.target instanceof HTMLLIElement)) return;
    if (!e.target.dataset.id) return;
    setSelectedTodo(e.target.dataset.id);
  };
  return (
    <StTodoList>
      {todoList &&
        todoList?.map((todo) => (
          <Link key={todo.id} to={`/${todo.id}`}>
            <StTodo
              data-id={todo.id}
              isSelected={todo.id === selectedTodo}
              onClick={handleTodoClick}
            >
              {todo.title}
            </StTodo>
          </Link>
        ))}
    </StTodoList>
  );
};

export default TodoList;
