import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard.jsx";
import ExpenseTracker from "./ExpenseTracker.jsx";
import BudgetPlanner from "./BudgetPlanner.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Investments from "./Investments.jsx";

import { FinanceProvider } from "./context/FinanceContext"; // ✅ import context

function App() {
  console.log("✅ App component rendered!");

  return (
    <Router>
      <FinanceProvider> {/* ✅ Wrap everything inside this */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/expense-tracker" element={<ExpenseTracker />} />
          <Route path="/budget-planner" element={<BudgetPlanner />} />
          <Route path="/investments" element={<Investments />} />
        </Routes>
      </FinanceProvider>
    </Router>
  );
}

export default App;
