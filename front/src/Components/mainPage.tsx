import * as React from 'react'
import "../style/main.css";
// @ts-ignore
import ChatCorner from "./chatCorner.tsx";
import {useState} from "react";
// @ts-ignore
import SoundCorner from "./soundCorner.tsx";

type Props = () => {
    timerInMinutes: number;
}
const MainPage = () => {


    const [isSoundCornerActive, setIsSoundCornerActive] = useState<boolean>(true);
    const [isTaskCornerActive, setIsTaskCornerActive] = useState<boolean>(true);
    const [isChatCornerActive, setIsChatCornerActive] = useState<boolean>(true);
    const [timeInMinutes, setTimeInMinutes] = useState<number>(15);
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

    const countingTime = () => {
        console.log(timeInMinutes);
        let time = timeInMinutes * 60;
        const countDown = document.getElementById("countDown");
        const  minutes = Math.floor(time / 60).toString();
        let seconds = time % 60;
        let secondsStr = '';
        secondsStr = seconds < 10 ? '0' + seconds : seconds.toString();

        countDown.innerText =`${minutes}:${secondsStr}`;
        time--;
    }


    return (
        <div>
                <div className="backgroundImage">
                    <div className="topBar">
                        <button className="buttonStyle"
                                role="button"
                                id="chatCornerId"
                                onClick={chatCornerDisplay}>Chat corner</button>
                        <button className="buttonStyle"
                                role="button"
                                id="soundBarCornerId"
                                onClick={soundBarCornerDisplay}>Sound bar</button>
                        <button className="buttonStyle"
                                role="button"
                                id="taskCornerId"
                                onClick={taskCornerDisplay}>Tasks corner</button>
                        <button className="buttonStyle"
                                role="button"
                                id="soundCornerId"
                                onClick={soundCornerDisplay}> Sound corner</button>
                        <button id="settings" className="settings"><pre>✦✦✦</pre>	</button>
                    </div>

                <div className="flexParent">
                    {isChatCornerActive &&
                        <ChatCorner></ChatCorner>
                    }

                    <div className="timerPomodoro">
                        <button className="buttonStyle" onClick={function() {
                            setInterval(function(){
                            countingTime();}, 1000);
                        }
                    }>Long</button>
                        <button className="buttonStyle" onClick={function() {
                            setTimeInMinutes(5);
                            setInterval(function(){
                                countingTime();}, 1000);
                        }
                        }>Short</button>
                        <button className="buttonStyle">Break</button>
                        <h1 id="countDown">15:00</h1>
                        <p id="lilText">Don't give up!</p>
                    </div>

                        {isSoundCornerActive &&
                            <SoundCorner></SoundCorner>
                        }

                    <div className="titlePomodoro">
                        <h5>PomodoroWithMe</h5>
                        <p>by Ixis</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainPage;