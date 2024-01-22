import * as React from 'react'
import "../style/timerStyle.css"
import {useState} from "react";

let timeForBreak = 0;
let timeInSeconds = 0;
let intervalId;
let breakIntervalId;



const FlowmodoroTimer = () => {
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const makePause = () => {
        setIsPaused(prevState => !prevState);
        document.getElementById("stop").innerHTML = isPaused ? "Start" : "Stop";
        if(!isPaused){
            timerInterval();
        } else {
         clearInterval(intervalId);
        }
    }

    const breakTimer = () => {
        timeForBreak = Math.floor(timeForBreak/5);
        const minutes = Math.floor(timeForBreak / 60);
        let seconds = timeForBreak % 60;
        let secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
        let minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
        document.getElementById('timer').innerHTML = minutesStr + ":" + secondsStr;
        breakIntervalId = null;
        breakTimerInterval();
    }

    const timerInterval = () => {
        intervalId = setInterval(function () {
            const minutes = Math.floor(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;
            let secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
            let minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
            document.getElementById('timer').innerHTML = minutesStr + ":" + secondsStr;
            timeInSeconds++;
            timeForBreak = timeInSeconds;
        }, 1000);

        document.getElementById('stop').addEventListener('click', function () {
            timeInSeconds = 0;
            clearInterval(intervalId);
        });
    }
    const breakTimerInterval = () => {
        breakIntervalId = setInterval(function () {
            const minutes = Math.floor(timeForBreak / 60);
            let seconds = timeForBreak % 60;
            let secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
            let minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
            document.getElementById('timer').innerHTML = minutesStr + ":" + secondsStr;
            timeForBreak--;
            if (timeForBreak === -1) {
                clearInterval(breakIntervalId);
                document.getElementById('timer').innerHTML = "00:00";
            }
        }, 1000);

        document.getElementById('stop').addEventListener('click', function () {
            clearInterval(breakIntervalId);
        });
    }

    return (
        <div className="timer">
            <button
                className="buttonStyle"
                id="stop"
                onClick={() => makePause()
                }>Start
            </button>
            <button
                className="buttonStyle"
                onClick={() => breakTimer()}
            >Break
            </button>
            <h1 id="timer">00:00</h1>
        </div>
    );
};

export default FlowmodoroTimer;