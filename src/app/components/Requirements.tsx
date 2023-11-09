import React, { useState } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { Divider, FloatButton, List, Modal, Typography } from "antd";

const { Title } = Typography;
export const Requirements = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requirementsList = [
    "The aim of this exercise is to create single web application that will consume data from remote API and will render pulled data in charts",
    "Use TypeScript",
    "Use next.js framework for building web application",
    "Use ant.d library for UI and components on the page",
    "Use remote API for data - https://coronavirus.data.gov.uk/details/developers-guide/main-api",
    "Use g2.antv for render charts (any chart types can be used, up to your selection)",
    "[OPTIONAL] Use trpc library for backend services and endpoints (use db up to your selection (eg., https://railway.app))",
  ];

  const designList = [
    "The page will consist from page header and content area",
    "Page header contains only title",
    "Content area contains two cards with charts (any chart type is possible) with dummy avatar and dummy button as per picture",
    "Above charts, there is a space (a panel) for Page title and dummy buttons (as per design, without any logic behind)",
    "[OPTIONAL] Add a heart icon (not on design below!) to cards which allows visitors to select card as a favorite (use trpc for this feature)",
  ];

  return (
    <>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        onClick={() => setIsModalOpen(true)}
        type="primary"
      />
      <Modal
        title="Requirements for this homework"
        open={isModalOpen}
        footer={null}
        width={800}
        onCancel={() => setIsModalOpen(false)}
      >
        <List
          dataSource={requirementsList}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Divider />
        <Title level={5}>Design of the page</Title>
        <List
          dataSource={designList}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Modal>
    </>
  );
};
