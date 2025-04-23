import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Correct extension
import App from "./App.jsx";

import "./index.css";

// ✅ Correct path to FinanceContext.jsx
import { FinanceProvider } from "./context/FinanceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FinanceProvider>
      <App />
    </FinanceProvider>
  </React.StrictMode>
);
