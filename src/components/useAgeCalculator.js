import { useReducer, useRef, useState } from "react";
import { ACTIONS } from "./actions";

export function useAgeCalculator(defaultState) {
  const calculator = useRef({
    date: new Date(),
    currentDate: Date.now(),
    difference: 0,
  });

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ACTIONS.CHANGE_DAY:
        return {
          ...state,
          day: action.payload.dEvent,
          isError: false,
        };

      case ACTIONS.CHANGE_MONTH:
        return {
          ...state,
          month: action.payload.mEvent,
          isError: false,
        };

      case ACTIONS.CHANGE_YEAR:
        return {
          ...state,
          year: action.payload.yEvent,
          isError: false,
        };

      case ACTIONS.CLICK_CALCULATE_DATE:
        return {
          ...state,
          daysResult: Math.ceil(
            ((calculator.current.difference / 3600000 / 24) % 365.25) % 30.4375
          ),
          monthsResult: Math.trunc(
            ((calculator.current.difference / 3600000 / 24) % 365.25) / 30.4375
          ),
          yearsResult: Math.trunc(
            calculator.current.difference / 3600000 / 24 / 365.25
          ),
        };

      case ACTIONS.ERROR:
        return { ...state, isError: true };

      default:
        return state;
    }
  }, defaultState);

  const [dayError, setDayError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");

  return {
    state,
    dispatch,
    dayError,
    setDayError,
    monthError,
    setMonthError,
    yearError,
    setYearError,
    calculator,
  };
}
