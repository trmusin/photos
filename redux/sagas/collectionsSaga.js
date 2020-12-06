import { put, takeEvery, call } from 'redux-saga/effects'
import unsplashApi from "../../api/api-unsplash";
import { appActions,  collectionsActions} from "../actions";
import {GET_COLLECTIONS_DATA, GET_COLLECTION} from "../reducers/collectionsReducer";


function* getCollectionsData(action) {
    try {
        const data = yield call(() => unsplashApi.getCollectionsList(action.page));
        yield put(collectionsActions.setData(data));
        yield put(appActions.showLoader(false));
    } catch (error) {
        console.log(error)
    }
}

function* getCollectionData(action) {
    try {
        const data = yield call(() => unsplashApi.getCollection(action.params));
        yield put(collectionsActions.setCollectionData(data));
        yield put(appActions.showLoader(false));
    } catch (error) {
        console.log(error)
    }
}

export function* collectionsSaga() {
    yield takeEvery(GET_COLLECTIONS_DATA, getCollectionsData)
}

export function* collectionSaga () {
    yield takeEvery(GET_COLLECTION, getCollectionData)
}