import axios from "axios";

export type CoronavirusData = {
  date: string;
  newCases: number;
};
export const fetchCoronavirusData = async (
  filters: string[],
): Promise<CoronavirusData[]> => {
  const endpoint = "https://api.coronavirus.data.gov.uk/v1/data";
  const apiParams = {
    filters: filters.join(";"),
    structure: JSON.stringify({
      date: "date",
      newCases: "newCasesByPublishDate",
    }),
  };

  const response = await axios.get(endpoint, { params: apiParams });

  return response.data.data;
};
