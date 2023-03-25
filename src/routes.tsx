import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "./Pages/Login";
import { Register } from "./Pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;