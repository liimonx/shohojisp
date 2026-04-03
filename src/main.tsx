import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@shohojdhara/atomix/theme";
import "@shohojdhara/atomix/styles";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
