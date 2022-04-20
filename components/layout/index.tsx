import React from "react";
import { Header } from "../header";
import { LayoutContainer } from "./styled";

export const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <LayoutContainer>{children}</LayoutContainer>
    </div>
  );
};
