import { actionTypes } from './constants'

export const incrementAction = (value) => {
    return {
        type: actionTypes.INCREMENT,
        payload: value ?? 1
    }
}

export const decrementAction = (value) => {
    return {
        type: actionTypes.DECREMENT,
        payload: value ?? 1
    }
}