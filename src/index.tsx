import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store } from "./store/store";
import "./firebase"; 

const app = document.getElementById("root");
if (!app) {
  throw new Error("No root element found");
}
const root = createRoot(app);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
