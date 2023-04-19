import { put, takeEvery } from "redux-saga/effects"
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
    yield takeEvery(counterActionTypes.INCREMENT, asyncIncrement)
    yield takeEvery(counterActionTypes.INCREMENT, asyncDecrement)
}

export default asyncCounterSaga;