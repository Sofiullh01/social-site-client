import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./MainRoure/MainRouter";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </AuthProvider>
  </React.StrictMode>
);
