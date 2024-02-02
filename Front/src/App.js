import { Route, Routes } from "react-router-dom";
import "./App.css";

import { AlertProvider } from "./context/alert";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
