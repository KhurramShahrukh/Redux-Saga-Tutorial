import { put, takeEvery, takeLatest, takeLeading } from "redux-saga/effects"
import { decrementCounter, incrementCounter } from "../actions/counter-actions"
import { counterActionTypes } from "../constants"


const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* asyncIncrement() {
    yield delay(1000)
    yield put(incrementCounter())
}

function* asyncDecrement() {
    yield delay(1000)
    yield put(decrementCounter())
}

function* asyncCounterSaga() {
    yield takeLatest(counterActionTypes.ASYNC_INCREMENT, asyncIncrement) // this will reset the increment timer if you click async increment before it finishes
    yield takeEvery(counterActionTypes.ASYNC_DECREMENT, asyncDecrement)
}

export default asyncCounterSaga;