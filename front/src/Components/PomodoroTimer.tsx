import * as React from 'react'
import "../style/timerStyle.css"
import {useState} from "react";

let timeForButton = 15;
let timeInSeconds = 900; // default 15 min
let intervalId;


const PomodoroTimer = () => {
    const [isPaused, setIsPaused] = useState<boolean>(false);

    const makePause = () => {
        setIsPaused(prevState => !prevState);
        document.getElementById("stop").innerHTML = isPaused ? "▶" : "⏸";
        if (!isPaused) {
            timerInterval();
        }
    }

    const timeManagement = (timeInMinutesFromButton) => {
        timeForButton = timeInMinutesFromButton;
        timeInSeconds = timeInMinutesFromButton * 60;
        clearInterval(intervalId);
        intervalId = null;
        timerInterval();
    }

    const timerInterval = () => {
        intervalId = setInterval(function () {
            const minutes = Math.floor(timeInSeconds / 60);
            let seconds = timeInSeconds % 60;
            let secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();
            let minutesStr = minutes < 10 ? '0' + minutes : minutes.toString();
            document.getElementById('timer').innerHTML = minutesStr + ":" + secondsStr;
            timeInSeconds--;
            if (timeInSeconds === -1) {
                clearInterval(intervalId);
                document.getElementById('timer').innerHTML = timeForButton.toString() + ":00";
            }
        }, 1000);

        document.getElementById('stop').addEventListener('click', function () {
            clearInterval(intervalId);
        });
    }

    return (
        <div className="timer">
            <button
                className="buttonStyle"
                onClick={() => timeManagement(30)}
            >Long
            </button>
            <button
                className="buttonStyle"
                onClick={() => timeManagement(15)}
            >Short
            </button>
            <button
                className="buttonStyle"
                onClick={() => timeManagement(1)}
            >Break
            </button>
            <button
                className="buttonStyle"
                id="stop"
                onClick={() => makePause()
                }>▶
            </button>
            <h1 id="timer">15:00</h1>
        </div>
    );
};

export default PomodoroTimer;