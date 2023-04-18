import { decrementAction, incrementAction } from "./actions";
import { counterActionTypes } from "../constants/counter-constants";
import { put, all, takeLatest } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* counterSaga(incrementType) {
    if (incrementType === counterActionTypes.INCREMENT) {
        yield takeLatest(incrementAction())
    } else if (incrementType === counterActionTypes.DECREMENT) {
        yield put(decrementAction())
    }
}

function* watcherCounterSaga() {
    yield takeLatest(counterActionTypes.INCREMENT, incrementAction())
}



export function* asyncCounterSaga(incrementType) {
    yield delay(1000)
    if (incrementType === counterActionTypes.INCREMENT) {
        yield put(incrementAction())
    } else if (incrementType === counterActionTypes.DECREMENT) {
        yield put(decrementAction())
    }
}

export default function* rootSaga() {
    yield all([
        counterSaga,
        asyncCounterSaga
    ])
}