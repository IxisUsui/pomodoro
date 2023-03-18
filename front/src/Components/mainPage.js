import React from 'react';
import "../style/main.css";
import {GrMore} from "react-icons/gr";
import SoundCorner from "./soundCorner";
const MainPage = () => {
    return (
        <div>
            <div className="backgroundImage">
                <SoundCorner></SoundCorner>
                <button id="settings" className="settings"><GrMore/></button>
                <div className="timerPomodoro">
                    <button>Long</button>
                    <button>Short</button>
                    <button>Break</button>
                    <h1>15:00</h1>
                    <p id="lilText">Don't give up!</p>
            </div>
                <div className="titlePomodoro">
                    <h1>PomodoroWithMe</h1>
                    <h5>by Ixis</h5>
                </div>
            </div>


        </div>
    );
};

export default MainPage;