import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { ApplicationStore } from "./store/applicationStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={ApplicationStore}>
      <App />
    </Provider>
  </StrictMode>
);
