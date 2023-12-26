import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { routes } from "./App";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={routes}>
    <App />
  </RouterProvider>
);
