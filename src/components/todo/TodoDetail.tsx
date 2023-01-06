import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, getTodosById, updateTodo } from "../../apis/todo";
import { INewTodo, ITodo } from "../../types/todo";

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

const StModifyTitle = styled.input`
  width: 100%;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  font-size: 2rem;
`;

const StModifyContent = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-family: inherit;
  resize: none;
`;

const StButton = styled.button<{ color: "blue" | "red" }>`
  display: inline-block;
  width: 50%;
  border: none;
  background-color: ${({ color }) => (color === "blue" ? "#017be8" : "red")};
  color: white;
  font-family: inherit;
  font-size: 1.5rem;
`;

const TodoDetail = () => {
  const [todo, setTodo] = useState<null | ITodo>(null);
  const [isModify, setIsModify] = useState(false);
  const [todoForm, setTodoForm] = useState<INewTodo>({
    title: "",
    content: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const getTitleAndContent = () => {
    getTodosById(id!)
      .then((data) => {
        setTodo(data.data);
        setTodoForm({ title: data.data.title, content: data.data.content });
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getTitleAndContent();
  }, []);

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

  const handleModifyClick = () => {
    setIsModify((prev) => !prev);
  };

  const handleCancelClick = () => {
    setIsModify((prev) => !prev);
    setTodoForm({ title: todo!.title, content: todo!.content });
  };

  const handleConfirmClick = () => {
    updateTodo(todoForm, id!)
      .then(() => {
        setIsModify((prev) => !prev);
        getTitleAndContent();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = () => {
    deleteTodo(id!)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {todo && (
        <>
          <StTodoDetail>
            {isModify ? (
              <>
                <StModifyTitle
                  type="text"
                  name="title"
                  value={todoForm.title}
                  onChange={handleFormChange}
                />
                <StModifyContent
                  name="content"
                  value={todoForm.content}
                  onChange={handleFormChange}
                />
              </>
            ) : (
              <>
                <StTodoTitle>{todo.title}</StTodoTitle>
                <StTodoContent>{todo.content}</StTodoContent>
              </>
            )}
          </StTodoDetail>
          <StButtonContainer>
            {isModify ? (
              <>
                <StButton color="blue" onClick={handleConfirmClick}>
                  confirm
                </StButton>
                <StButton color="red" onClick={handleCancelClick}>
                  cancel
                </StButton>
              </>
            ) : (
              <>
                <StButton color="blue" onClick={handleModifyClick}>
                  modify
                </StButton>
                <StButton color="red" onClick={handleDeleteClick}>
                  delete
                </StButton>
              </>
            )}
          </StButtonContainer>
        </>
      )}
    </>
  );
};

export default TodoDetail;