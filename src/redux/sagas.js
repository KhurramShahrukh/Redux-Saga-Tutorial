import { decrementAction, incrementAction } from "./actions";
import { actionTypes } from "./constants";
import { put, all, takeLatest } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* counterSaga(incrementType) {
    if (incrementType === actionTypes.INCREMENT) {
        yield takeLatest(incrementAction())
    } else if (incrementType === actionTypes.DECREMENT) {
        yield put(decrementAction())
    }
}

function* watcherCounterSaga() {
    yield takeLatest(actionTypes.INCREMENT, incrementAction())
}



export function* asyncCounterSaga(incrementType) {
    yield delay(1000)
    if (incrementType === actionTypes.INCREMENT) {
        yield put(incrementAction())
    } else if (incrementType === actionTypes.DECREMENT) {
        yield put(decrementAction())
    }
}

export default function* rootSaga() {
    yield all([
        counterSaga,
        asyncCounterSaga
    ])
}