import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  background: #fdfdfd;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3748;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background: #38a169;
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #2f855a;
  }
`;

const Alert = styled.div`
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: #fff5f5;
  color: #c53030;
  border: 1px solid #feb2b2;
  border-radius: 5px;
  font-weight: 500;
`;

const Transactions = styled.ul`
  list-style: none;
  margin-top: 1rem;
  padding: 0;
`;

const TransactionItem = styled.li`
  background: #edf2f7;
  padding: 0.5rem;
  border-radius: 5px;
  margin-top: 0.5rem;
`;

const Total = styled.p`
  font-weight: bold;
  margin-top: 1rem;
`;

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [alertMsg, setAlertMsg] = useState("");

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (desc, amt) => {
    const newTransaction = {
      description: desc,
      amount: parseFloat(amt),
      date: new Date(),
    };
    setTransactions([...transactions, newTransaction]);

    if (amt > 5000) {
      setAlertMsg(`High expense alert: ₹${amt} spent on ${desc}`);
    } else {
      setAlertMsg("");
    }
  };

  const totalSpent = transactions.reduce((acc, t) => acc + t.amount, 0);

  return (
    <Container>
      <Heading>💰 Expense Tracker</Heading>

      <InputRow>
        <Input id="desc" placeholder="Description" />
        <Input id="amt" placeholder="Amount" type="number" />
        <Button
          onClick={() => {
            const desc = document.getElementById("desc").value;
            const amt = parseFloat(document.getElementById("amt").value);
            if (desc && amt) addTransaction(desc, amt);
          }}
        >
          Add
        </Button>
      </InputRow>

      {alertMsg && <Alert>{alertMsg}</Alert>}

      <h3 style={{ marginTop: "1.5rem", fontWeight: "600" }}>📋 Transactions</h3>
      <Transactions>
        {transactions.map((t, idx) => (
          <TransactionItem key={idx}>
            {t.description}: ₹{t.amount.toFixed(2)}
          </TransactionItem>
        ))}
      </Transactions>

      <Total>Total Spent: ₹{totalSpent.toFixed(2)}</Total>
    </Container>
  );
};

export default ExpenseTracker;
