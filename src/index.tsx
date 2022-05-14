import { createRoot } from "react-dom/client";
import {App} from "./App";

const app = document.getElementById("root");
if (!app) {
  throw new Error("No root element found");
}
const root = createRoot(app);
root.render(<App />);