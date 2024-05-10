import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import CustomProvider from "./providers/CustomProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CustomProvider>
        <RouterProvider router={router} />
        <Toaster />
      </CustomProvider>
    </HelmetProvider>
  </React.StrictMode>
);
