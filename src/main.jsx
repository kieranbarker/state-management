import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.jsx";
import TasksProvider from "./App/TasksContext.jsx";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  </StrictMode>
);
