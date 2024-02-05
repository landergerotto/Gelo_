import { Route, Routes } from "react-router-dom";
import "./App.css";

import { AlertProvider } from "./context/alert";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./components/NotFound";
import ProductsPage from "./pages/Products";

function App() {
  return (
    <>
      <AlertProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AlertProvider>
    </>
  );
}

export default App;
