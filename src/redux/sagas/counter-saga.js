import { decrementCounter, incrementCounter } from "../actions/reducer-counter-actions";
import { put, takeEvery } from 'redux-saga/effects'
import { counterSagaActionTypes } from "../constants";

function* increment() {
    yield put(incrementCounter())
}

function* decrement() {
    yield put(decrementCounter())
}

function* counterSaga() {
    yield takeEvery(counterSagaActionTypes.IMMEDIATE_INCREMENT, increment)
    yield takeEvery(counterSagaActionTypes.IMMEDIATE_DECREMENT, decrement)
}

export default counterSaga;




