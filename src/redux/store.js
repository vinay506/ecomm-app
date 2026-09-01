import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import {configureStore} from "@reduxjs/toolkit";
import productSaga from './productSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(productSaga);
export default store;