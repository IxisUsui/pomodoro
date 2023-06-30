import * as React from 'react'
import "../style/taskStyle.css";
const TaskCorner = () => {
    return (
        <div className="taskContainer">
            <div className="flex-column">
                <div className="flex-column-task">
                    <h3>📋 Task corner</h3>
                    <button>+</button>
                </div>
                <div className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" stroke-width="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input className="inputTask"></input>
                </div>
            </div>
        </div>
    );
};

export default TaskCorner;