import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/store";

import "./index.css";
import LoginPage from "./Pages/login";
import RegisterPage from "./Pages/register";
import ErrorPage from "./Pages/404";
import ProductPage from "./Pages/products";
import ProfilePage from "./Pages/profile";
import DetailProductPage from "./Pages/detailProduct";
import Navbar from "./components/Layouts/Navbar";
import DarkModeContextProvide from "./context/DarkMode";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },

  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },

  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <DarkModeContextProvide>
        <RouterProvider router={router}/>
      </DarkModeContextProvide>
    </Provider>
  </StrictMode>
);
