import "./App.css"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Home from ".";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Registration */}
        <Route path="/register" element={<Register />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* App */}
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;