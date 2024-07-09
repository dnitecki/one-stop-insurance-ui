import ReactDOM from "react-dom/client";
import "./styles.scss";
import App from "./App";
import { BrowserRouter, Router, Routes } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
