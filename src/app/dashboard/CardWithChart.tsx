import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardProps,
  Divider,
  Flex,
  Tooltip,
  Typography,
} from "antd";
import { CommentOutlined } from "@ant-design/icons";

const commentIconStyle: React.CSSProperties = {
  color: "rgba(0, 0, 0, 0.45)",
};

const { Text } = Typography;

export const CardWithChart = (props: CardProps) => (
  <Card {...props}>
    {props.children}
    <Divider />
    <Flex justify="space-between">
      <Tooltip title="Ant User" placement="top">
        <Avatar src="https://i.pravatar.cc/150?img=1" />
      </Tooltip>

      <Button type="text">
        <Text type="secondary">3</Text>
        <CommentOutlined style={commentIconStyle} />
      </Button>
    </Flex>
  </Card>
);
