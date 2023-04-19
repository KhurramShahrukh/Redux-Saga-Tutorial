import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer/rootReducer';
import rootSaga from './sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();
const store  = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

export default store;