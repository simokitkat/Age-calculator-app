// import { useReducer, useRef, useState } from "react";
import { createContext } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";
import { ACTIONS } from "./components/actions";
import { useAgeCalculator } from "./components/useAgeCalculator";

export let resultContext = createContext();

const defaultState = {
  day: "",
  month: "",
  year: "",
  daysResult: "- -",
  monthsResult: "- -",
  yearsResult: "- -",
  isError: false,
};

function App() {
  // const calculator = useRef({
  //   date: new Date(),
  //   currentDate: Date.now(),
  //   difference: 0,
  // });

  // const [state, dispatch] = useReducer((state, action) => {
  //   switch (action.type) {
  //     case ACTIONS.CHANGE_DAY:
  //       return {
  //         ...state,
  //         day: action.payload.dEvent,
  //         isError: false,
  //       };

  //     case ACTIONS.CHANGE_MONTH:
  //       return {
  //         ...state,
  //         month: action.payload.mEvent,
  //         isError: false,
  //       };

  //     case ACTIONS.CHANGE_YEAR:
  //       return {
  //         ...state,
  //         year: action.payload.yEvent,
  //         isError: false,
  //       };

  //     case ACTIONS.CLICK_CALCULATE_DATE:
  //       return {
  //         ...state,
  //         daysResult: Math.ceil(
  //           ((calculator.current.difference / 3600000 / 24) % 365.25) % 30.4375
  //         ),
  //         monthsResult: Math.trunc(
  //           ((calculator.current.difference / 3600000 / 24) % 365.25) / 30.4375
  //         ),
  //         yearsResult: Math.trunc(
  //           calculator.current.difference / 3600000 / 24 / 365.25
  //         ),
  //       };

  //     case ACTIONS.ERROR:
  //       return { ...state, isError: true };

  //     default:
  //       return state;
  //   }
  // }, defaultState);

  // const [dayError, setDayError] = useState("");
  // const [monthError, setMonthError] = useState("");
  // const [yearError, setYearError] = useState("");

  const {
    state,
    dispatch,
    dayError,
    setDayError,
    monthError,
    setMonthError,
    yearError,
    setYearError,
    calculator,
  } = useAgeCalculator(defaultState);

  function handleDayChange(e) {
    dispatch({ type: ACTIONS.CHANGE_DAY, payload: { dEvent: e.target.value } });
  }

  function handleMonthChange(e) {
    dispatch({
      type: ACTIONS.CHANGE_MONTH,
      payload: { mEvent: e.target.value },
    });
  }

  function handleYearChange(e) {
    dispatch({
      type: ACTIONS.CHANGE_YEAR,
      payload: { yEvent: e.target.value },
    });
  }

  function handleClick() {
    if (
      !(state.day && state.month && state.year) ||
      state.day < 1 ||
      state.day > 31 ||
      state.month < 1 ||
      state.month > 12 ||
      state.year < 1 ||
      state.year > new Date().getFullYear()
    ) {
      dispatch({ type: ACTIONS.ERROR });
      return;
    }

    calculator.current.date = new Date(
      +state.year,
      +state.month - 1,
      +state.day
    );
    calculator.current.difference =
      calculator.current.currentDate - calculator.current.date;

    if (
      calculator.current.date.getDate() !== +state.day &&
      state.month &&
      state.year
    ) {
      dispatch({ type: ACTIONS.ERROR });
      return;
    }

    dispatch({ type: ACTIONS.CLICK_CALCULATE_DATE });
  }

  return (
    <resultContext.Provider
      value={{
        state,
        dayError,
        setDayError,
        monthError,
        setMonthError,
        yearError,
        setYearError,
        calculator,
      }}
    >
      <main>
        <section className="app">
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              time="day"
              placeHolder="DD"
              onMutate={handleDayChange}
              v={state.day}
            />
            <Input
              time="month"
              placeHolder="MM"
              onMutate={handleMonthChange}
              v={state.month}
            />
            <Input
              time="year"
              placeHolder="YYYY"
              onMutate={handleYearChange}
              v={state.year}
            />
          </form>
          <Button onSmash={handleClick} />
          <Result />
        </section>
      </main>
    </resultContext.Provider>
  );
}

export default App;
