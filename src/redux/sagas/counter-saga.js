import { decrementCounter, incrementCounter } from "../actions/counter-actions";
import { put, takeEvery } from 'redux-saga/effects'
import { counterActionTypes } from "../constants";

function* increment() {
    yield put(incrementCounter())
}

function* decrement() {
    yield put(decrementCounter())
}

function* counterSaga() {
    yield takeEvery(counterActionTypes.IMMEDIATE_INCREMENT, increment)
    yield takeEvery(counterActionTypes.IMMEDIATE_DECREMENT, decrement)
}

export default counterSaga;




