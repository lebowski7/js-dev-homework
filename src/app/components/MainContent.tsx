import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  padding: "1.5rem 3rem",
  maxWidth: "1200px",
  width: "100%",
  margin: "auto",
};

export const MainContent = ({ children }: React.PropsWithChildren) => {
  return <Content style={contentStyle}>{children}</Content>;
};
