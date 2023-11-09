import React, { useEffect, useState } from "react";
import { Col, Empty, Row, Spin } from "antd";
import { LinearChart } from "@/app/dashboard/LinearChart";
import { PieChart } from "@/app/dashboard/PieChart";
import { CardWithChart } from "@/app/dashboard/CardWithChart";
import {
  CoronavirusData,
  fetchCoronavirusData,
} from "@/api/fetchCoronavirusData";
import {
  formatDataLinearMonthsChart,
  formatDataForPieWeekdayChart,
} from "@/app/utils";

export const DashboardCharts = () => {
  const [data, setData] = useState<null | CoronavirusData[]>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCoronavirusData([
          "areaType=region",
          "areaName=London",
        ]);
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Spin />;
  if (!data) return <Empty />;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} xl={12}>
        <CardWithChart title="Total cases in 2023 per month">
          <LinearChart data={formatDataLinearMonthsChart(data)} />
        </CardWithChart>
      </Col>
      <Col xs={24} xl={12}>
        <CardWithChart title="Total cases grouped by day in 2023">
          <PieChart data={formatDataForPieWeekdayChart(data)} />
        </CardWithChart>
      </Col>
    </Row>
  );
};
