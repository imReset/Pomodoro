import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Settings } from "./Settings";

const Countdown = ({ key, timer, animate, remainder }) => {
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={[
        ["e0b371", 0.33],
        ["e0b371", 0.33],
        ["e0b371", 0.33],
      ]}
      strokeWidth={6}
      size={20}
      trailColor="#800000"
      onComplete={() => {
        stopCountdown();
      }}
    >
      {remainder}
    </CountdownCircleTimer>
  );
};

export default Countdown;
