import {createAction, handleActions} from "redux-actions";
import {finishLoading, startLoading} from "./loading";
import {takeLatest} from 'redux-saga/effects';
import {put, call} from 'redux-saga/effects';
import * as api from '../lib/api';

const GET_BOOK = 'book/GET_BOOK';
const GET_BOOK_SUCCESS = 'book/GET_BOOK_SUCCESS';
const GET_BOOK_FAILURE = 'book/GET_BOOK_FAILURE';

const ADD_MY_BOOK = 'book/ADD_MY_BOOK';
const DELETE_BOOK = 'book/DELETE_BOOK';

export const getBook = createAction(GET_BOOK, query => query);
export const addMyBook = createAction(ADD_MY_BOOK, myBook => myBook);
export const deleteBook = createAction(DELETE_BOOK, id => id);

function* getBookSaga(action) {
    yield put(startLoading(GET_BOOK));
    try{
        const bookList = yield call(api.search, action.payload);
        yield put({
            type: GET_BOOK_SUCCESS,
            payload: bookList,
        })

    } catch (e) {
        yield put({
            type: GET_BOOK_FAILURE,
            payload: e,
            error: true,
        })
    }
    yield put(finishLoading(GET_BOOK));
}

export function* bookSaga() {
    yield takeLatest(GET_BOOK, getBookSaga);
}

const initialState = {
    meta: null,
    bookList: null,
    myBookList: [],
};

const book = handleActions({
        [GET_BOOK_SUCCESS]: (state, action) => ({
            ...state,
            meta: action.payload.meta,
            bookList: action.payload.documents
        }),

        [ADD_MY_BOOK]: (state, action) => ({
            ...state,
            myBookList: state.myBookList.concat(action.payload),
        }),

        [DELETE_BOOK]: (state, action) => ({
            ...state,
            myBookList: state.myBookList.filter(book => book.isbn !== action.payload)
        })
    },
    initialState
);

export default book;