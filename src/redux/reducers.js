import { actionTypes } from './constants'

const initialCounterState = {
    count: 0
}

export const counterReducer = (state = initialCounterState, {type, payload}) => {
    switch (type) {
        case actionTypes.INCREMENT:
            state = { ...state, count: state.count + payload }
            return state

        case actionTypes.DECREMENT:
            state = { ...state, count: state.count - payload }
            return state

        default:
            return state
    }
}