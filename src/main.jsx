import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./MainRoure/MainRouter";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className="max-w-6xl mx-auto">
        <RouterProvider router={router} />
        <Toaster />
      </div>
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
