import { counterReducerActionTypes } from '../constants'

export const incrementCounter = (value) => {
    return {
        type: counterReducerActionTypes.INCREMENT,
        payload: value ?? 1
    }
}

export const decrementCounter = (value) => {
    return {
        type: counterReducerActionTypes.DECREMENT,
        payload: value ?? 1
    }
}

export const resetCounter = () => {
    return {
        type: counterReducerActionTypes.RESET,
    }
}