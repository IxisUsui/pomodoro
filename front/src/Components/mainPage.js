import React from 'react';
import "../style/main.css";
import SoundCorner from "./soundCorner";
import ChatCorner from "./chatCorner";
const MainPage = () => {
    return (
        <div>
                <div className="backgroundImage">
                    <div className="flexParent">
                    <ChatCorner></ChatCorner>
                    <button id="settings" className="settings"><pre>✦✦✦</pre>	</button>
                    <div className="timerPomodoro">
                        <button>Long</button>
                        <button>Short</button>
                        <button>Break</button>
                        <h1>15:00</h1>
                        <p id="lilText">Don't give up!</p>
                    </div>
                        <SoundCorner></SoundCorner>
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