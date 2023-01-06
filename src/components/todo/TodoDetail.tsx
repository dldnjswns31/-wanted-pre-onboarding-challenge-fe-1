import React from "react";
import styled from "styled-components";

const StTodoTitle = styled.div`
  flex: 1 0;
  font-size: 2rem;
`;

const StTodoContent = styled.div`
  flex: 9 0;
  font-size: 1.5rem;
`;

const TodoDetail = () => {
  return (
    <>
      <StTodoTitle>Todo Title</StTodoTitle>
      <StTodoContent>Todo Content</StTodoContent>
    </>
  );
};

export default TodoDetail;
