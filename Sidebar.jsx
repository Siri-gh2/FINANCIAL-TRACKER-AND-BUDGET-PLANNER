import React from "react";
import { FaHome, FaWallet, FaChartLine, FaSignOutAlt } from "react-icons/fa"; // Added FaChartLine
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #1f2937;
  color: white;
  min-height: 100vh;
  padding: 1rem;
`;


const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #60a5fa;
  }
`;

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <NavItem to="/dashboard"><FaHome /> Dashboard</NavItem>
      <NavItem to="/expense-tracker"><FaWallet /> Expense Tracker</NavItem>
      <NavItem to="/budget-planner"><FaWallet /> Budget Planner</NavItem>
      <NavItem to="/investments"><FaChartLine /> Investments, Worth!</NavItem> {/* ✅ New Nav */}
      <NavItem to="/"><FaSignOutAlt /> Logout</NavItem>
    </SidebarWrapper>
  );
};

export default Sidebar;
