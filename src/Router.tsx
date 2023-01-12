import { Routes, Route } from "react-router-dom";

import Auth from "./routes/Auth";
import ProtectedRoute from "./routes/ProtectedRoute";
import Todo from "./routes/Todo";

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute authenticate={true} />}>
        <Route path="/*" element={<Todo />} />
      </Route>
      <Route element={<ProtectedRoute authenticate={false} />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default Router;
