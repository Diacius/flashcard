import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from "./App";
import Editor from "./Editor";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/editor",
    element: <Editor/>
  }
]);
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
