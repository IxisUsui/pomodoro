import {combineReducers} from 'redux'

const timeReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_TIME":
            return [state, {
                longTime: action.payload.longTime,
                shortTime: action.payload.shortTime,
                break: action.payload.break
            }];

        default:
            return state;
    }
}


const rootReducer = combineReducers({
    time: timeReducer
});

export default rootReducer;
