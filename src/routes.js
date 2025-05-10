// src/routes.js
import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <admin />,
  },
];

export default routes;
