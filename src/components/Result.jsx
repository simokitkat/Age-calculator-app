import { useContext } from "react";
import { resultContext } from "../App";

const Result = () => {
  const { state } = useContext(resultContext);
  const { daysResult, monthsResult, yearsResult } = state;

  return (
    <div className="result">
      <p>
        <span className="years">{yearsResult}</span> years
      </p>
      <p>
        <span className="months">{monthsResult}</span> months
      </p>
      <p>
        <span className="days">{daysResult}</span> days
      </p>
    </div>
  );
};

export default Result;
