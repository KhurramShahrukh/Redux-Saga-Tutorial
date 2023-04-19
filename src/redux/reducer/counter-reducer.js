import { counterActionTypes } from '../constants'

const initialCounterState = {
    count: 0
}

export const counterReducer = (state = initialCounterState, { type, payload }) => {
    switch (type) {
        case counterActionTypes.INCREMENT:
            state = { ...state, count: state.count + payload }
            return state

        case counterActionTypes.DECREMENT:
            state = { ...state, count: state.count - payload }
            return state

        case counterActionTypes.RESET:
            state = { ...state, count: 0 }
            return state

        case counterActionTypes.ASYNC_INCREMENT:
            state = { ...state, count: state.count + payload }
            return state

        case counterActionTypes.ASYNC_DECREMENT:
            state = { ...state, count: state.count - payload }
            return state

        default:
            return state
    }
}