/* eslint-disable react-refresh/only-export-components */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import BasketPage from "./BasketPage";
import Store from "./Store";
import "./index.css";

// Create a parent component to manage the shared state
function App() {
  const [basket, setBasket] = useState([]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "store",
      element: <Store basket={basket} setBasket={setBasket} />,
    },
    {
      path: "basket",
      element: <BasketPage basket={basket} setBasket={setBasket} />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
