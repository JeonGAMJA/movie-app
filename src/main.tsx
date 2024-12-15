import { createRoot } from "react-dom/client";
import "./f_shared/styles/index.css";
import App from "./app/routes/index.tsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./app/providers/AuthContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
