import { useContext, useEffect } from "react";
import { resultContext } from "../App";

export const DayError = () => {
  const { state, dayError, setDayError, calculator } =
    useContext(resultContext);

  useEffect(() => {
    if (state.isError) {
      if (state.day === "") {
        setDayError("This field is required");
      } else if (state.day < 1 || state.day > 31) {
        setDayError("Must be a valid day");
      } else if (
        calculator.current.date.getDate() !== +state.day &&
        state.month &&
        state.year
      ) {
        setDayError("Must be a valid date");
      }
    } else {
      setDayError("");
    }
  });

  return <div className="day-error error">{dayError}</div>;
};

export const MonthError = () => {
  const { state, monthError, setMonthError } = useContext(resultContext);

  useEffect(() => {
    if (state.isError) {
      if (state.month === "") {
        setMonthError("This field is required");
      } else if (state.month < 1 || state.month > 12) {
        setMonthError("Must be a valid month");
      }
    } else {
      setMonthError("");
    }
  });

  return <div className="month-error error">{monthError}</div>;
};

export const YearError = () => {
  const { state, yearError, setYearError } = useContext(resultContext);

  useEffect(() => {
    if (state.isError) {
      if (state.year === "") {
        setYearError("This field is required");
      } else if (state.year < 1 || state.year > new Date().getFullYear()) {
        setYearError("Must be a valid year");
      }
    } else {
      setYearError("");
    }
  });

  return <div className="year-error error">{yearError}</div>;
};
