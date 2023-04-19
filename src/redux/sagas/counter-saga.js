import { decrementCounter, incrementCounter } from "../actions/counter-actions";
import { put } from 'redux-saga/effects'
import { counterActionTypes } from "../constants";

function* increment() {
    yield put(incrementCounter())
}

function* decrement() {
    yield put(decrementCounter())
}

function* counterSaga() {
    yield takeEvery(counterActionTypes.INCREMENT, increment)
    yield takeEvery(counterActionTypes.DECREMENT, decrement)
}

export default counterSaga;




