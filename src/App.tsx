import { useState } from "react";
import Widget from "./components/widget/Widget";

import "bootstrap/dist/css/bootstrap.min.css";
import { getHourlyData, getWeeklyData } from "./helpers/apiHelper";

interface Event {
  time: string;
  coughs: number;
  session_time_s: number;
}

const App = () => {
  const [hourlyData, setHourlyData] = useState<number>(0);
  const [weeklyData, setWeeklyData] = useState<Event[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getDataHandler = async () => {
    setIsLoading(true);
    setError("");

    try {
      const hourlyData = await getHourlyData("hour", "2023-02-26T14:20:47.589522", "2023-02-27T14:20:47.589522");
      const weeklyData = await getWeeklyData("week", "2023-02-06T16:20:47.916317", "2023-03-27T16:20:47.916317");

      setHourlyData(hourlyData);
      setWeeklyData(weeklyData);
      
    } catch (error) {
      setError("Failed to fetch data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button
        className='btn bg-primary text-light mx-4 mt-4'
        onClick={() => {
          getDataHandler();
        }}
      >
        Fetch Data
      </button>
      {isLoading ? (
        <div className='mx-5 mt-5'>Loading...</div>
      ) : error ? (
        <div className='mx-5 mt-5 text-danger'>{error}</div>
      ) : (
        <div className='m-4'>
          <Widget hourlyData={hourlyData} weeklyData={weeklyData} />
        </div>
      )}
    </div>
  );
};

export default App;
