import React, { useEffect, useRef } from "react";
import { Chart } from "@antv/g2";

export const LinearChart = ({
  data,
}: {
  data: { month: string; totalCases: number }[];
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current?.childNodes.length === 0) {
      const chart = new Chart({
        container: chartRef.current,
        autoFit: true,
      });

      chart
        .interval()
        .data(data)
        .encode("x", "month")
        .encode("y", "totalCases")
        .encode("color", "month");

      chart.render();
    }
  });

  return <div ref={chartRef} />;
};
