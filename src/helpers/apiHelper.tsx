import axios from "axios";
type AggregationType = "hour" | "day" | "week" | "month";
interface Event {
  time: string;
  coughs: number;
  session_time_s: number;
}

export const getHourlyData = async (aggregation: AggregationType, from?: string, to?: string) => {
  try {
    const response = await axios.get<Event[]>("https://us-central1-hyfe-coughwatch.cloudfunctions.net/dummy_cough_events", {
      params: { aggregation, from, to },
    });

    const sumOfCoughs: number = response?.data?.reduce((totalCoughs, currentValue) => {
      return totalCoughs + currentValue.coughs;
    }, 0);
    return sumOfCoughs;
  } catch (error) {
    throw error;
  }
};

export const getWeeklyData = async (aggregation: AggregationType, from?: string, to?: string) => {
  try {
    const response = await axios.get<Event[]>(`https://us-central1-hyfe-coughwatch.cloudfunctions.net/dummy_cough_events`, {
      params: { aggregation, from, to },
    });

    return response?.data;
  } catch (error) {
    throw error;
  }
};
