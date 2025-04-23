import React from "react";
import styled from "styled-components";

const PageLayout = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default PageLayout;

const LayoutWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #f3f4f6;
`;
