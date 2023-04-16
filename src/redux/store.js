import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { counterReducer } from './reducers'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'


const combinedReducers = combineReducers({ counterReducer })

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Pass it as a middleware while creating the store
const store = createStore(
    combinedReducers,
    applyMiddleware(sagaMiddleware)
);

// Then run the saga
sagaMiddleware.run(rootSaga);

export default store