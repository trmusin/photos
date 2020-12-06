import { all, fork } from "redux-saga/effects";
import { homeSaga } from "./homeSaga";
import { collectionsSaga, collectionSaga}from "./collectionsSaga";
import { searchSaga } from "./searchSaga";


export default function* rootSaga() {
    yield all([
        fork(homeSaga),
        fork(collectionsSaga),
        fork(collectionSaga),
        fork(searchSaga),
    ]);
}