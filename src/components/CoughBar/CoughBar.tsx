import React, { type ReactElement } from "react";
import { getAngleClass, getDynamicData } from "../../helpers/coughBarHelper";
import "./CoughBar.css";

interface CoughBarProps {
  data: number;
}

const CoughBar = ({ data }: CoughBarProps): ReactElement => {
  const roundedData: number = Math.round(data);
  const dynamicData = getDynamicData(roundedData);

  return (
    <div className='bg-white mb-4 border rounded-3 px-4 py-2 d-flex flex-column flex-sm-row justify-content-between align-items-center'>
      <div>
        <h4>Cough dynamic</h4>
        <p className='text-secondary'>Last 24hr comparing to the previous week</p>
        <p className={`bg-body-secondary text-secondary px-3 py-1 cough-bar-btn`}>{dynamicData.text}</p>
      </div>
      <div>
        <h4 className={`text-end fw-bold ${dynamicData.textColor} `}>{`${ roundedData > 0 ? '+' : ''}${roundedData}%`}</h4>
        <div className='angle-box bg-body-secondary position-relative'>
          <div className={`angle-line ${dynamicData.barColor} ${getAngleClass(roundedData)}`} />
          <div className='mt-4'>
            <div className='shadow-angle'></div>
            <div className='stand-angle'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoughBar;
