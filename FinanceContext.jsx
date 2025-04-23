import React, { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [income, setIncome] = useState(0);
  const [budget, setBudget] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [savings, setSavings] = useState(0);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [alerts, setAlerts] = useState([]);

  const handleGenerateBudget = () => {
    if (!income || income <= 0) {
      setAlerts(["Please enter a valid income"]);
      return;
    }

    const calculatedBudget = {
      food: income * 0.15,
      clothing: income * 0.1,
      groceries: income * 0.2,
      rent: income * 0.3,
      transport: income * 0.1,
      entertainment: income * 0.1,
      savings: income * 0.4,
    };

    const totalBudget = Object.values(calculatedBudget).reduce((a, b) => a + b, 0);
    const remaining = income - totalBudget;
    setSavings(remaining);
    setBudget(calculatedBudget);
    setAlerts([]);
  };

  const handleAddExpense = () => {
    if (!category || !amount) {
      setAlerts(["Please enter category and amount"]);
      return;
    }

    const newTransactions = [...transactions, { category, amount: parseFloat(amount) }];
    setTransactions(newTransactions);
    setCategory("");
    setAmount("");
    setAlerts([]);
  };

  return (
    <FinanceContext.Provider
      value={{
        income,
        setIncome,
        budget,
        setBudget,
        transactions,
        setTransactions,
        savings,
        setSavings,
        category,
        setCategory,
        amount,
        setAmount,
        alerts,
        setAlerts,
        handleGenerateBudget,
        handleAddExpense,
      }}
    >
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
