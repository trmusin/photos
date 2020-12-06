import {GET_HOME_DATA, SET_HOME_DATA} from "../reducers/homeReducer";

export default {
    getData: page => ({
        type: GET_HOME_DATA,
        page
    }),
    setData: data => ({
        type: SET_HOME_DATA,
        data
    }),
};


