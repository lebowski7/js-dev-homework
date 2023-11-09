import React from "react";
import { DashboardTopPanel } from "@/app/dashboard/DashboardTopPanel";
import { DashboardCharts } from "@/app/dashboard/DashboardCharts";
import { Flex } from "antd";

export const DashboardPage = () => (
  <Flex vertical gap="large">
    <DashboardTopPanel />
    <DashboardCharts />
  </Flex>
);
