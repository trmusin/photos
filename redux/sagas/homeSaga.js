import { put, takeEvery, call } from 'redux-saga/effects'
import unsplashApi from "../../api/api-unsplash";
import {GET_HOME_DATA} from "../reducers/homeReducer";
import { appActions,  homeActions} from "../actions";


function* getData(action) {
    try {
        const data = yield call(() => unsplashApi.getPhotosList(action.page));
        yield put(homeActions.setData(data));
        yield put(appActions.showLoader(false));
    } catch (error) {
        console.log(error)
    }
}

export function* homeSaga() {
    yield takeEvery(GET_HOME_DATA, getData)
}