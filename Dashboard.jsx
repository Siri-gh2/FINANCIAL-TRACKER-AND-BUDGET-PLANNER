import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { FaRupeeSign, FaChartPie, FaHistory } from "react-icons/fa";
import Tips from "./Tips";

const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  background: #f9fafb;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 1.5rem;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const Card = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CardValue = styled.p`
  font-size: 1.5rem;
  color: #111827;
  font-weight: bold;
`;

const Dashboard = () => {
  const totalIncome = 50000; // temporary mock data
  const totalSpent = 22000;
  const balance = totalIncome - totalSpent;

  const recentTransactions = [
    { category: "Food", amount: 1500 },
    { category: "Rent", amount: 12000 },
    { category: "Groceries", amount: 3000 },
  ];

  return (
    <PageLayout>
      <Sidebar />
      <MainContent>
        <Title>Heyyaaa how is it going lately👀</Title>

        <CardGrid>
          <Card>
            <CardTitle><FaRupeeSign /> Total Income</CardTitle>
            <CardValue>₹{totalIncome}</CardValue>
          </Card>

          <Card>
            <CardTitle><FaChartPie /> Total Spent</CardTitle>
            <CardValue>₹{totalSpent}</CardValue>
          </Card>

          <Card>
            <CardTitle>💰 Remaining Balance</CardTitle>
            <CardValue>₹{balance}</CardValue>
          </Card>
        </CardGrid>

        <Card style={{ marginTop: "2rem" }}>
          <CardTitle><FaHistory /> Recent Transactions</CardTitle>
          <ul>
            {recentTransactions.map((item, index) => (
              <li key={index}>
                {item.category}: ₹{item.amount}
              </li>
            ))}
          </ul>
        </Card>
        <Tips/>
      </MainContent>
    </PageLayout>
  );
};

export default Dashboard;
