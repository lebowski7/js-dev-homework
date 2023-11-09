import React from "react";
import { Layout, Typography } from "antd";

const { Header } = Layout;
const { Title } = Typography;

const headerStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  background:
    "linear-gradient(149deg, rgba(40,135,120,1) 0%, rgba(20,190,163,1) 100%);",
};

const headerTitleStyle: React.CSSProperties = {
  color: "#fff",
  margin: 0,
};

export const Head = () => {
  return (
    <Header style={headerStyle}>
      <Title style={headerTitleStyle}>SPA with Charts</Title>
    </Header>
  );
};
