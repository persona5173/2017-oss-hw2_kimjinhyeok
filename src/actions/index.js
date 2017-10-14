export const INCREMENT = 'INCREMENT';
export const CONFIRM = 'CONFIRM';
export const SET_INPUT = 'SET_INPUT';

export function increment() {
    return {
        type: INCREMENT
    };
}

export function confirm() {
    return {
        type: CONFIRM
    };
}

export function setInput(value) {
    return {
        type: SET_INPUT,
        num: value
    };
}
