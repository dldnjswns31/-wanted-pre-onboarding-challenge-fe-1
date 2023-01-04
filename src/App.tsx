import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./routes/Auth";
import Todo from "./routes/Todo";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}

export default App;
