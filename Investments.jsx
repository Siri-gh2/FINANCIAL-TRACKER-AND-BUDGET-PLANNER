import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

// Layouts
const PageLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  background: #f9fafb;
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  width: 100%;
  max-width: 700px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

// Make the entire card clickable with <a>
const PlatformCard = styled.a`
  border: 1px solid #d1d5db;
  border-radius: 0.75rem;
  padding: 1rem;
  margin-top: 1rem;
  background: #f3f4f6;
  display: block;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: #e5e7eb;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const PlatformName = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
`;

const PlatformDetails = styled.p`
  color: #4b5563;
  margin-top: 0.25rem;
`;

const Investments = () => {
  return (
    <PageLayout>
      <Sidebar />
      <MainContent>
        <Wrapper>
          <Title>📈 Investments, Worth!</Title>

          <PlatformCard href="https://groww.in" target="_blank" rel="noopener noreferrer">
            <PlatformName>Groww</PlatformName>
            <PlatformDetails>
              Beginner-friendly mutual funds, stocks, and SIPs. Great for monthly savings from ₹500.
            </PlatformDetails>
          </PlatformCard>

          <PlatformCard href="https://www.indmoney.com" target="_blank" rel="noopener noreferrer">
            <PlatformName>INDmoney</PlatformName>
            <PlatformDetails>
              Helps track and invest in Indian and US stocks. Also recommends based on your salary.
            </PlatformDetails>
          </PlatformCard>

          <PlatformCard href="https://www.smallcase.com" target="_blank" rel="noopener noreferrer">
            <PlatformName>Smallcase</PlatformName>
            <PlatformDetails>
              Curated stock bundles for specific goals. Great for long-term salary-based investing.
            </PlatformDetails>
          </PlatformCard>

          <PlatformCard href="https://www.etmoney.com" target="_blank" rel="noopener noreferrer">
            <PlatformName>ET Money</PlatformName>
            <PlatformDetails>
              SIPs, term insurance, NPS — full financial planning in one place!
            </PlatformDetails>
          </PlatformCard>
        </Wrapper>
      </MainContent>
    </PageLayout>
  );
};

export default Investments;
