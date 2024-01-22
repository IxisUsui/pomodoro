import * as React from 'react'
import "../style/main.css";
import "../style/timerStyle.css";

import { useState } from "react";
// @ts-ignore
import SoundCorner from "../Components/soundCorner.tsx";
// @ts-ignore
import PomodoroTimer from "../Components/PomodoroTimer.tsx";
// @ts-ignore
import FlowmodoroTimer from "../Components/FlowmodoroTimer.tsx";
// @ts-ignore
import TaskCorner from "../Components/taskCorner.tsx";

const MainPage = () => {
    const [isSoundCornerActive, setIsSoundCornerActive] = useState<boolean>(true);
    const [isTaskCornerActive, setIsTaskCornerActive] = useState<boolean>(true);
    const [isPomodoroActive, setIsPomodoroActive] = useState<boolean>(true);
    const [isDarkModeActive, setIsDarkModeActive] = useState<boolean>(true);


    const displayCorner = (cornerName: string) => {
        let btn = document.getElementById(cornerName);

        if (btn.classList.contains("activeBtn")) {
            btn.classList.remove("activeBtn");
        } else {
            btn.classList.add("activeBtn");
        }
    }
    const soundCornerDisplay = () => {
        setIsSoundCornerActive(prevState => !prevState);
        displayCorner("soundCornerId");
    }

    const taskCornerDisplay = () => {
        setIsTaskCornerActive(prevState => !prevState);
        displayCorner("taskCornerId");
    }

    const changeTypeOfFocusClock = () => {
        if(!isPomodoroActive){
            document.getElementById("modoroId").innerHTML = "Flowmodoro";
        } else {
            document.getElementById("modoroId").innerHTML = "Pomodoro";
        }
        setIsPomodoroActive(prevState => !prevState)
    }
    const soundBarCornerDisplay = () => {
    }

    const darkModeChange = () => {
        displayCorner("darkModeId");
        setIsDarkModeActive(prevState => !prevState);
        if(isDarkModeActive){
            document.getElementById("modeId").classList.add("darkMode");
            document.getElementById("darkModeId").innerHTML = "📜";
        } else {
            document.getElementById("modeId").classList.remove("darkMode");
            document.getElementById("darkModeId").innerHTML = "👻";

        }
    }

    return (
        <div id="modeId">
            <div className="backgroundImage">
                <div className="topBar">
                    <button className="smallButtonStyle"
                            id="darkModeId"
                            onClick={darkModeChange}
                    >👻
                    </button>
                    <button className="buttonStyle"
                            style={{marginRight: '120px'}}
                            id="modoroId"
                            onClick={changeTypeOfFocusClock}>Flowmodoro
                    </button>
                    <button className="buttonStyle"
                            id="taskCornerId"
                            onClick={taskCornerDisplay}>Tasks corner
                    </button>
                    <button className="buttonStyle"
                            id="soundCornerId"
                            onClick={soundCornerDisplay}> Sound corner
                    </button>
                    <button className="buttonStyle"
                            id="soundBarCornerId"
                            onClick={soundBarCornerDisplay}>Sound bar
                    </button>
                    <button id="settings" className="settings">
                        <pre>✦✦✦</pre>
                    </button>
                </div>

                <div className="flexParent">
                    {isTaskCornerActive &&
                        <TaskCorner></TaskCorner>
                    }
                    {isPomodoroActive &&
                        <div className="timerPomodoro">
                            <PomodoroTimer></PomodoroTimer>
                        </div>
                    }
                    {!isPomodoroActive &&
                        <div className="timerFlowmodoro">
                            <FlowmodoroTimer></FlowmodoroTimer>
                        </div>
                    }

                    {isSoundCornerActive &&
                        <SoundCorner></SoundCorner>
                    }

                    <div className="titlePomodoro">
                        <h6>PomodoroWithMe</h6>
                        <p>by Ixis</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;