function getTimers(timers) {
    return {
        type: "GET_TIME",
        payload: {longTime: timers.longTime, shortTime: timers.shortTime, break: timers.break}
    }
}

function setTimers(timers) {
    return {
        type: "SET_TIME",
        payload: {longTime: timers.longTime, shortTime: timers.shortTime, break: timers.break}
    }
}

export {getTimers, setTimers}