import { createRoot } from "react-dom/client";
import "./shared/styles/index.css";
import App from "./app/routes/index.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
