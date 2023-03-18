import React from 'react';
import "../style/main.css"

const MainPage = () => {
    return (
        <div>
            <div className="backgroundImage">
                <div className="timerPomodoro">
                    <button>Long</button>
                    <button>Short</button>
                    <button>Break</button>
                    <h1>15:00</h1>
            </div>
                <h1 className="titlePomodoro">PomodoroWithMe</h1>
                <h5 className="lilTitle">by Ixis</h5>
            </div>


        </div>
    );
};

export default MainPage;