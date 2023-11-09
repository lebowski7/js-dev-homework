import { Badge, Button, Flex, Typography } from "antd";
import {
  DownloadOutlined,
  FilterOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import React from "react";

const { Text, Title } = Typography;

const panelButtonIconStyle: React.CSSProperties = {
  color: "#288778",
};

export const DashboardTopPanel = () => (
  <Flex justify="space-between">
    <Title>Dashboard</Title>

    <Flex gap="middle">
      <Button>
        Export to PDF <DownloadOutlined style={panelButtonIconStyle} />
      </Button>

      <Button>
        Notes <Text type="secondary">(3)</Text>
        <MenuOutlined style={panelButtonIconStyle} />
      </Button>

      <Button>
        <Flex gap="small" align="center">
          Filter
          <Badge count="9+" color="#288778" />
          <FilterOutlined style={panelButtonIconStyle} />
        </Flex>
      </Button>
    </Flex>
  </Flex>
);
