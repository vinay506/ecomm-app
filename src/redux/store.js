import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./rootReducer";
import {configureStore} from "@reduxjs/toolkit";
import productSaga from './productSaga';
import createSagaMiddleware from '@redux-saga/core';

// const store = createStore(rootReducer, applyMiddleware(thunk));
const store = configureStore({
    reducer: rootReducer
})
export default store;