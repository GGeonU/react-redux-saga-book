import {combineReducers} from "redux";
import book, {bookSaga} from "./book";
import loading from "./loading";
import {all} from 'redux-saga/effects'

const rootReducer = combineReducers({
    book, loading
});

export function* rootSaga() {
    yield all([bookSaga()])
}

export default rootReducer;

