import { useContext } from "react";
import { DayError, MonthError, YearError } from "./Error";
import { resultContext } from "../App";

const Input = ({ time, placeHolder, onMutate, v }) => {
  const { state } = useContext(resultContext);

  return (
    <>
      <div>
        <label
          htmlFor={time.toLowerCase()}
          className={state.isError ? "red-label" : ""}
        >
          {time.toUpperCase()}
        </label>
        <input
          type="text"
          name={time.toLowerCase()}
          id={time.toLowerCase()}
          placeholder={placeHolder}
          onChange={onMutate}
          value={v}
          className={state.isError ? "red-input" : ""}
        />
        {time === "day" ? (
          <DayError />
        ) : time === "month" ? (
          <MonthError />
        ) : (
          <YearError />
        )}
      </div>
    </>
  );
};

export default Input;
