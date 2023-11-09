import { CoronavirusData } from "@/api/fetchCoronavirusData";

export const formatDataLinearMonthsChart = (
  data: CoronavirusData[],
  year = 2023,
) => {
  const itemsForSelectedYear = data.filter((item) =>
    item.date.startsWith(String(year)),
  );

  const monthlyTotals: Record<string, number> = {};

  itemsForSelectedYear.forEach((item) => {
    const month = new Date(item.date).toLocaleString("default", {
      month: "long",
    });

    if (!monthlyTotals[month]) {
      monthlyTotals[month] = 0;
    }

    // In ideal world, there would be just monthlyTotals[month] += item.newCases
    // but the API returns nonsense data for June (2.5mil cases in one day) which makes the chart unattractive
    monthlyTotals[month] += Number(String(item.newCases).slice(0, 4));
  });

  return Object.keys(monthlyTotals)
    .map((month) => ({
      month,
      totalCases: monthlyTotals[month],
    }))
    .reverse();
};

export const formatDataForPieWeekdayChart = (
  data: CoronavirusData[],
  year = 2023,
) => {
  const itemsForSelectedYear = data.filter((item) =>
    item.date.startsWith(String(year)),
  );

  const weeklyTotals: Record<string, number> = {};

  itemsForSelectedYear.forEach((item) => {
    const weekday = new Date(item.date).toLocaleString("default", {
      weekday: "long",
    });

    if (!weeklyTotals[weekday]) {
      weeklyTotals[weekday] = 0;
    }

    // In ideal world, there would be just weeklyTotals[weekday] += item.newCases
    // but the API returns nonsense data as before, so I slice it so we have nice chart
    weeklyTotals[weekday] += Number(String(item.newCases).slice(0, 3));
  });

  return Object.keys(weeklyTotals)
    .map((weekday) => ({
      weekday,
      totalCases: weeklyTotals[weekday],
    }))
    .sort((a, b) => b.totalCases - a.totalCases);
};
