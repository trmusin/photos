import { put, takeEvery, call } from 'redux-saga/effects'
import { searchActions, appActions, historyActions} from "../actions";
import {GET_SEARCH_DATA} from "../reducers/searchReducer";
import unsplashApi from "../../api/api-unsplash";


function* getSearch(action) {

    try {
        const setHistory =(data)=>{
            let item = {
                search: action.params.search,
                time: Date.now()
            };
            if(data.total){
                item.total = data.total;
                return {[action.params.search]: item}
            } return {}
        };
        const data = yield call(() => unsplashApi.searchPhotos(action.params));
        yield put(searchActions.setSearch(data));
        let item = yield call(() => setHistory(data));
        yield put(historyActions.setHistory(item));
        yield put(appActions.showLoader(false));
    } catch (error) {
        console.log(error)
    }
}

export function* searchSaga() {
    yield takeEvery(GET_SEARCH_DATA, getSearch)
}