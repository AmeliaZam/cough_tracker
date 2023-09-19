import React, { type ReactElement, useEffect, useState } from "react";
import CoughBar from "../CoughBar/CoughBar";
import NoData from "../NoData";
import "./Widget.css";

interface Event {
  time: string;
  coughs: number;
  session_time_s: number;
}

interface WidgetProps {
  hourlyData: number;
  weeklyData: Event[];
}

const Widget = ({ hourlyData, weeklyData }: WidgetProps): ReactElement => {
  const [coughAvg, setCoughAvg] = useState<number[]>([]);

  useEffect(() => {
    setCoughAvg(weeklyData?.map((data) => ((data.coughs / 7 - hourlyData) * 100) / (data.coughs / 7)));
  }, [hourlyData, weeklyData]);

  if (coughAvg.length === 0) {
    return <NoData />;
  }

  return (
    <div className='widget widget-bg border border-0'>
      <div className='widget-header p-2 text-center text-light'>
        <h3>Insights</h3>
      </div>
      <div className='widget-body p-3'>
        {coughAvg?.map((data) => {
          return <CoughBar data={data} />;
        })}
      </div>
    </div>
  );
};

export default Widget;
