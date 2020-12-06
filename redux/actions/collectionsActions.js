import {
    GET_COLLECTION,
    GET_COLLECTIONS_DATA,
    RESET_COLLECTION,
    SET_COLLECTION,
    SET_COLLECTIONS_DATA
} from "../reducers/collectionsReducer";

export default {
    getData: page => ({
        type: GET_COLLECTIONS_DATA,
        page
    }),
    setData: data => ({
        type: SET_COLLECTIONS_DATA,
        data
    }),
    resetCollection: ()=> ({
        type: RESET_COLLECTION,
    }),
    getCollectionData: params => ({
        type: GET_COLLECTION,
        params
    }),
    setCollectionData: data => ({
        type: SET_COLLECTION,
        data
    }),
};


