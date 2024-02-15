import { Route, Routes } from "react-router-dom";
import "./App.css";

import { AlertProvider } from "./context/alert";
import { DecoderProvider } from "./context/decoder";
import { NextUIProvider } from "@nextui-org/react";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import NotFound from "./components/NotFound";
import ProductsPage from "./pages/Products";
import SingleProductPage from "./pages/SingleProduct";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./pages/Protected";

function App() {



  return (
    <>
      <NextUIProvider>
        <AlertProvider>
          <DecoderProvider>
            <Routes>
              {/* <Route path="/" element={<HomePage />} /> */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/product/:id" element={<SingleProductPage />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute
                    errorPage={<NotFound></NotFound>}
                    targetPage={<HomePage></HomePage>}
                  ></ProtectedRoute>
                }
              >
                <Route path="" element={<HomePage />} />
                <Route path="product/:id" element={<SingleProductPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DecoderProvider>
        </AlertProvider>
      </NextUIProvider>
    </>
  );
}

export default App;
