import React from "react";
import Header from "../header";
import { LayoutContainer } from "./styled";

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  );
};

export default Layout;
