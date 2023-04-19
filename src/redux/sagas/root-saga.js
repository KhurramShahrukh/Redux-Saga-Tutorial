import { all } from "redux-saga/effects";
import counterSaga from "./counter-saga";
import asyncCounterSaga from "./async-counter-saga";

export default function* rootSaga() {
    yield all([
        counterSaga,
        asyncCounterSaga
    ])
}