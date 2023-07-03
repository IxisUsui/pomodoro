import * as React from 'react'
import "../style/taskStyle.css";
const TaskCorner = () => {

    const addTask = () => {

    }

    const changeColor = () => {
        console.log("grayish text");
    }


    return (
        <div className="taskContainer">
            <div className="flex-column">

                <div className="flex-column-task">
                    <h3>📋 Task corner</h3>
                    <button className="buttonStyle">Save</button>
                </div>
                <div className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2" onClick={() => changeColor()}/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input id="task" className="inputTask"></input>
                </div>
                <div id="task2" className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input className="inputTask"></input>
                </div>
                <div id="task3" className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input className="inputTask"></input>
                </div>
                <div id="task4" className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input className="inputTask"></input>
                </div>
                <div id="task5" className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input className="inputTask"></input>
                </div>
                <div id="task6" className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
                                </g>
                            </svg>
                        </label>
                    </div>
                    <input className="inputTask"></input>
                </div>
                <div id="task7" className="flex-column-task">
                    <div className="checkbox">
                        <input type="checkbox" className="check" id="check2"/>
                        <label htmlFor="check2" className="label">
                            <svg width="50" height="50" viewBox="0 0 100 100">
                                <rect x="30" y="20" width="50" height="50" stroke="black" fill="none"/>
                                <g transform="translate(0,-952.36222)">
                                    <path
                                        d="m 56,963 c -102,122 6,9 7,9 17,-5 -66,69 -38,52 122,-77 -7,14 18,4 29,-11 45,-43 23,-4 "
                                        stroke="black" strokeWidth="3" fill="none" className="path1"/>
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