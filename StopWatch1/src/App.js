import React, { useState } from 'react';
import './App.css';

const Stopwatch = () => {
  const [time, setTime] = useState({ hr: 0, min: 0, sec: 0, milli: 0 });
  const [status, setStatus] = useState();

  let newHr = time.hr;
  let newMin = time.min;
  let newSec = time.sec;
  let newMilli = time.milli;

  const start = () => {
    watchFun();
    setStatus(setInterval(watchFun, 10));
  };
  const stop = () => {
    clearInterval(status);
  };

  const reset = () => {
    clearInterval(status);
    setTime({ hr: 0, min: 0, sec: 0, milli: 0 });
  };

  const watchFun = () => {
    if (newMilli === 100) {
      newMilli = 0;
      newSec++;
    }
    if (newSec === 60) {
      newSec = 0;
      newMin++;
    }
    if (newMin === 60) {
      newMin = 0;
      newHr++;
    }
    newMilli++;
    return setTime({ hr: newHr, min: newMin, sec: newSec, milli: newMilli });
  };

  return (
    <>
      <div className="stopwatch1">
        <h1>
          {time.hr + ' : ' + time.min + ' : ' + time.sec + ' : ' + time.milli}
        </h1>
        <div className="button">
          <button className="start" onClick={start}>
            Start
          </button>
          <button className="stop" onClick={stop}>
            Stop
          </button>
          <button className="reset" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;