import {GET_SEARCH_DATA, RESET_SEARCH, SET_SEARCH_DATA} from "../reducers/searchReducer";

export default {
    reset: ()=> ({type: RESET_SEARCH}),
    getSearch: params => ({
        type: GET_SEARCH_DATA,
        params
    }),
    setSearch: data => ({
        type: SET_SEARCH_DATA,
        data
    }),
};