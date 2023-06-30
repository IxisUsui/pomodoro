import * as React from 'react'
import "../style/main.css";
// @ts-ignore
import ChatCorner from "../Components/chatCorner.tsx";
import {useState} from "react";
// @ts-ignore
import SoundCorner from "../Components/soundCorner.tsx";
// @ts-ignore
import Timer from "../Components/Timer.tsx";
// @ts-ignore
import TaskCorner from "../Components/taskCorner.tsx";

const MainPage = () => {
    const [isSoundCornerActive, setIsSoundCornerActive] = useState<boolean>(true);
    const [isTaskCornerActive, setIsTaskCornerActive] = useState<boolean>(true);
    const [isChatCornerActive, setIsChatCornerActive] = useState<boolean>(true);

    const displayCorner = (cornerName: string) => {
        let btn = document.getElementById(cornerName);
        if (btn.classList.contains("activeBtn")) {
            btn.classList.remove("activeBtn");
        } else {
            btn.classList.add("activeBtn");
        }
    }
    const soundCornerDisplay = () =>{
        setIsSoundCornerActive(prevState => !prevState);
        displayCorner("soundCornerId");
    }

    const taskCornerDisplay = () =>{
        setIsTaskCornerActive(prevState => !prevState);
        displayCorner("taskCornerId");
    }

    const chatCornerDisplay = () =>{
        setIsChatCornerActive(prevState => !prevState);
        displayCorner("chatCornerId");
    }
    const soundBarCornerDisplay = () =>{
    }


    return (
        <div>
                <div className="backgroundImage">
                    <div className="topBar">
                        <button className="buttonStyle"
                                id="chatCornerId"
                                onClick={chatCornerDisplay}>Chat corner</button>
                        <button className="buttonStyle"
                                id="taskCornerId"
                                onClick={taskCornerDisplay}>Tasks corner</button>
                        <button className="buttonStyle"
                                id="soundBarCornerId"
                                onClick={soundBarCornerDisplay}>Sound bar</button>
                        <button className="buttonStyle"
                                id="soundCornerId"
                                onClick={soundCornerDisplay}> Sound corner</button>
                        <button id="settings" className="settings"><pre>✦✦✦</pre>	</button>
                    </div>

                <div className="flexParent">
                    {isTaskCornerActive &&
                        <TaskCorner></TaskCorner>
                    }

                    <div className="timerPomodoro">
                        <Timer></Timer>
                        <p id="lilText">Don't give up!</p>
                    </div>

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