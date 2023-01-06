import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getTodosById } from "../../apis/todo";
import { ITodo } from "../../types/todo";

const StTodoDetail = styled.div`
  flex: 9 0;
  padding: 2rem 1rem;
`;

const StTodoTitle = styled.div`
  margin-bottom: 2rem;
  font-size: 2rem;
`;

const StTodoContent = styled.div`
  font-size: 1.5rem;
`;

const StButtonContainer = styled.div`
  display: flex;
  flex: 1 0;
`;

const StButton = styled.button<{ name: "modify" | "delete" }>`
  display: inline-block;
  width: 50%;
  border: none;
  background-color: ${({ name }) =>
    name === "modify" ? "#017be8" : "#cccccc"};
  color: white;
  font-family: inherit;
  font-size: 1.5rem;
`;

const TodoDetail = () => {
  const [todo, setTodo] = useState<null | ITodo>(null);

  const { id } = useParams();
  useEffect(() => {
    getTodosById(id!)
      .then((data) => setTodo(data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <StTodoDetail>
        <StTodoTitle>{todo && todo.title}</StTodoTitle>
        <StTodoContent>{todo && todo.content}</StTodoContent>
      </StTodoDetail>
      <StButtonContainer>
        <StButton name="modify">modify</StButton>
        <StButton name="delete">delete</StButton>
      </StButtonContainer>
    </>
  );
};

export default TodoDetail;
