import * as React from 'react'
import "../style/soundStyle.css";

const SoundCorner = () => {
    return (
        <div className="soundContainer">
            <div className="flex-column">
                <h3>♯ Sound corner</h3>
                <button>🌫 Wind 🌫</button>
                <button>🜂 Fire 🜂</button>
                <button>🌧 Rain 🌧</button>
                <button>🌩 Storm 🌩</button>
                <button>☽ Lofi ☾</button>
            </div>

        </div>
    );
};

export default SoundCorner;