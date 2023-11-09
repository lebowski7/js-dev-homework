import React, { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

export const PieChart = ({
  data,
}: {
  data: { weekday: string; totalCases: number }[];
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current?.childNodes.length === 0) {
      const chart = new Chart({
        container: chartRef.current,
        autoFit: true,
      });
      chart.coordinate({ type: "theta", innerRadius: 0.6 });
      chart
        .interval()
        .data(data)
        .transform({ type: "stackY" })
        .encode("y", "totalCases")
        .encode("color", "weekday");

      chart.render();
    }
  });

  return <div ref={chartRef} />;
};
