import { counterActionTypes } from '../constants'

export const incrementCounter = (value) => {
    return {
        type: counterActionTypes.INCREMENT,
        payload: value ?? 1
    }
}

export const decrementCounter = (value) => {
    return {
        type: counterActionTypes.DECREMENT,
        payload: value ?? 1
    }
}

export const resetCounter = () => {
    return {
        type: counterActionTypes.RESET,
    }
}