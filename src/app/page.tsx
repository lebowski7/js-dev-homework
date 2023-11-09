"use client";
import React from "react";
import { ConfigProvider, Layout } from "antd";
import theme from "./theme/themeConfig";
import { Head } from "@/app/components/Head";
import { MainContent } from "@/app/components/MainContent";
import { DashboardPage } from "@/app/dashboard/DashboardPage";

const App = () => (
  <ConfigProvider theme={theme}>
    <div className="App">
      <Layout>
        <Head />
        <MainContent>
          <DashboardPage />
        </MainContent>
      </Layout>
    </div>
  </ConfigProvider>
);

export default App;
