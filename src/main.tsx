import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ModalProvider } from "./shared/Providers/ModalProvider";
import { BrowserRouter } from "react-router-dom";

import "normalize.css";
import "./index.css";
import App from "./App/App";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ModalProvider>
        <App />
      </ModalProvider>
    </StrictMode>
  </BrowserRouter>,
);
