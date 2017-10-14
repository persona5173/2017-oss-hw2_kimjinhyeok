import { INCREMENT, CONFIRM, SET_INPUT } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: Math.round(Math.random()*100),
    count_value: 0,
    input_value: 1,
    confirm: 'Guess'
};

const counter = (state = counterInitialState, action) => {
    switch(action.type) {
        case CONFIRM:

            if(state.value == state.input_value){
                return Object.assign({}, state, {
                    confirm: 'Correct',
                    count_value: state.count_value + 1
                });
            }
            else if(state.value > state.input_value ){
                return Object.assign({}, state, {
                    confirm: 'UP',
                    count_value: state.count_value + 1
                });
            }
            else{
                return Object.assign({}, state, {
                    confirm: 'DOWN'                    ,
                    count_value: state.count_value + 1
                });
            }

        case SET_INPUT:
            return Object.assign({}, state, {
                input_value: action.num
            });
        default:
            return state;
    }
};

const counterApp = combineReducers({
    counter
});

export default counterApp;