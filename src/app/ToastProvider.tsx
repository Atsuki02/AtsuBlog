"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import { useTheme } from "next-themes";
import "react-toastify/dist/ReactToastify.css";

function ToastProvider() {
  const { theme } = useTheme();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme={theme === "dark" ? "dark" : "light"}
      />
    </>
  );
}

export default ToastProvider;
