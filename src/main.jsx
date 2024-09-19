import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AllCompaniesDetailProvider from "./components/context/AllCompaniesDetailProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllCompaniesDetailProvider>
      <App />
    </AllCompaniesDetailProvider>
  </StrictMode>
);
