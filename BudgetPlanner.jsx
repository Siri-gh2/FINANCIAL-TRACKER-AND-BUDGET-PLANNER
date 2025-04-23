import React from "react";
import styled from "styled-components";
import { FaWallet, FaExclamationTriangle } from "react-icons/fa";
import { useFinance } from "./context/FinanceContext";
import Sidebar from "./Sidebar";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const BudgetPlanner = () => {
  const {
    income,
    setIncome,
    budget,
    handleGenerateBudget,
    alerts,
  } = useFinance();

  const fullBudget = { ...budget };

  // Avoid duplicate savings
  const pieData = Object.entries(fullBudget)
    .filter(([key]) => key.toLowerCase() !== "savings")
    .map(([category, amount]) => ({
      name: category,
      value: amount,
    }));

  // Add savings separately
  if (budget.savings) {
    pieData.push({ name: "Savings", value: budget.savings });
  }

  const COLORS = [
    "#a855f7", "#ec4899", "#10b981",
    "#f97316", "#3b82f6", "#f43f5e", "#6366f1"
  ];

  return (
    <Layout>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Content>
        <Title><FaWallet /> Budget Planner</Title>

        <InputRow>
          <Input
            type="number"
            placeholder="Enter your income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
          />
          <Button onClick={handleGenerateBudget}>Generate Budget</Button>
        </InputRow>

        {Object.keys(budget).length > 0 && (
          <>
            <Section>
              <h3>📊 Suggested Budget</h3>
              <BudgetList>
                {Object.entries(fullBudget)
                  .filter(([key]) => key.toLowerCase() !== "savings")
                  .map(([key, val]) => (
                    <CategoryRow key={key}>
                      <Label>{key.toUpperCase()}:</Label>
                      <BudgetInput value={val.toFixed(2)} readOnly />
                    </CategoryRow>
                  ))}
                <CategoryRow>
                  <Label>SAVINGS:</Label>
                  <BudgetInput value={(budget.savings || 0).toFixed(2)} readOnly />
                </CategoryRow>
              </BudgetList>
            </Section>

            <Section>
              <h3>📈 Budget Distribution</h3>
              <PieChart width={400} height={300}>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </Section>
          </>
        )}

        {alerts.map((msg, index) => (
          <Warning key={index}>
            <FaExclamationTriangle />
            {msg}
          </Warning>
        ))}
      </Content>
    </Layout>
  );
};

export default BudgetPlanner;

// Styled Components
const Layout = styled.div`
  display: flex;
  height: 100vh;
`;

const SidebarContainer = styled.div`
  width: 250px;
`;

const Content = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f9fafb;
  overflow-y: auto;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.8rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.8rem 1.2rem;
  background: linear-gradient(to right, #7f00ff, #e100ff);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const Section = styled.div`
  margin-top: 2rem;
`;

const BudgetList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  width: 100%;
  padding: 0.25rem 0;
`;

const Label = styled.label`
  font-weight: bold;
  flex: 1;
`;

const BudgetInput = styled.input`
  width: 70px;
  padding: 0.4rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  text-align: center;
  margin-left: 1rem;
`;

const Warning = styled.div`
  margin-top: 1rem;
  background-color: #fff4e5;
  padding: 1rem;
  border-radius: 8px;
  color: #d97706;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
