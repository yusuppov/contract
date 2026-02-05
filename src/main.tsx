import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./shared/Providers/ModalProvider";
import "normalize.css";
import "./index.css";
import App from "./App/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
);
