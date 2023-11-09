import { Badge, Button, Col, Flex, Row, Typography } from "antd";
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

const dashboardTitleStyle: React.CSSProperties = {
  margin: 0,
  whiteSpace: "nowrap",
};

export const DashboardTopPanel = () => (
  <Row gutter={[16, 16]}>
    <Col xs={24} xl={12}>
      <Title style={dashboardTitleStyle}>Dashboard</Title>
    </Col>
    <Col xs={24} xl={12}>
      <Flex gap="middle" wrap="wrap" justify="end">
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
    </Col>
  </Row>
);
