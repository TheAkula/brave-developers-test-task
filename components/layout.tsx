import React from "react";
import styled from "styled-components";
import Header from "./header";

const LayoutContainer = styled.div`
  position: relative;
`;

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  );
};

export default Layout;
