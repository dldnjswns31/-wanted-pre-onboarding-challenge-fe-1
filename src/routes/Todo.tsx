import React from "react";
import styled from "styled-components";

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
  return (
    <StMainContainer>
      <StSection>
        <div>
          <StSectionTitle>List</StSectionTitle>
          <StTodoList>
            <li>todo 1</li>
            <li>todo 2</li>
            <li>투두 3</li>
          </StTodoList>
          <StAddButton>Add Todo</StAddButton>
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
  );
};

export default Todo;
