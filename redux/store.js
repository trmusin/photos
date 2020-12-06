import {createStore, applyMiddleware } from "redux";
import {createWrapper} from 'next-redux-wrapper';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import rootSaga from './sagas/index'




let sagaMiddleware = createSagaMiddleware();
let middlewares = [sagaMiddleware ];

const makeStore =(context)=> {
    let store = createStore(rootReducer, applyMiddleware(...middlewares));
    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store
};

export const wrapper = createWrapper(makeStore);