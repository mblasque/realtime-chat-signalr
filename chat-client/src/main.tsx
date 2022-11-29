import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom/client";
import Chat from "./App";

import { v4 as uuidv4 } from "uuid";

(window as any).user = uuidv4();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Chat />
  </React.StrictMode>
);
