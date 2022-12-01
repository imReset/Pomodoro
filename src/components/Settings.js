import React, { useState, createContext } from "react";

export const Settings = createContext();

function SettingsProvider(props) {
  const [pomodoro, setPomodoro] = useState(1); //* 25 minutes suggested
  const [creating, setCreating] = useState({}); //* TODO: find a better variable name
  const [startCountdown, setStartCountdown] = useState(false);

  function handlePomodoroChange(event) {
    updateCreate({
      ...creating,
      state: event,
    });
    handlePomodoroTime(creating);
  }

  // start the timer
  function startTime() {
    setStartCountdown(true);
  }

  // stop the timer
  function stopTime() {
    setStartCountdown(false);
  }

  const remainder = ({ remainingTime }) => {
    const mins = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${mins}:${seconds}`;
  };

  const SettingsButton = () => {
    setCreating({});
    setPomodoro(0);
  };

  const updateExecute = (updateSettings) => {
    setCreating(updateSettings);
    handlePomodoroTime(updateSettings);
  };

  const setTime = (value) => {
    switch (value.active) {
      case "pomodoro":
        setPomodoro(value.pomodoro);
        break;
      case "shortBreak":
        setPomodoro(value.shortBreak);
        break;
      case "longBreak":
        setPomodoro(value.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };
  function stopCountdown() {
    setStartCountdown(false);
  }

  return (
    <Settings.Provider
      value={{
        pomodoro,
        creating,
        updateCreate,
        startCountdown,
        startTime,
        stopTime,
        remainder,
        SettingsButton,
        handlePomodoroChange,
        stopCountdown,
      }}
    >
      {props.children}
    </Settings.Provider>
  );
}

export default SettingsProvider;
