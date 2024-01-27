import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Todo List</title>
      <link rel="stylesheet" href="index.css" />
    </Helmet>
    <App />
  </React.StrictMode>
);
