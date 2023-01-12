import { Routes, Route } from "react-router-dom";

import AuthPage from "./routes/AuthPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import TodoPage from "./routes/TodoPage";

const Router = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute authenticate={true} />}>
        <Route path="/*" element={<TodoPage />} />
      </Route>
      <Route element={<ProtectedRoute authenticate={false} />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
