import {takeEvery, call, put, all } from 'redux-saga/effects';

import {  PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts(action) {
        console.warn("action is called in saga ", action);
        const response = yield fetch("http://localhost:3500/products");
        const data = yield response.json();
        console.warn("data is ", data);
        yield put({ type: SET_PRODUCT_LIST, data: data });
}
function* searchProducts(action) {
        console.warn("action is called in saga ", action);
        const response = yield fetch(`http://localhost:3500/products?q=${action.query}`);
        const result = yield response.json();
        console.warn("data is ", result);
        yield put({ type: SET_PRODUCT_LIST, data: result });
}
function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts);
    yield takeEvery(SEARCH_PRODUCT, searchProducts);
}

export default productSaga;