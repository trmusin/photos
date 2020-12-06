export const SET_COLLECTIONS_DATA = 'SET_COLLECTIONS_DATA';
export const GET_COLLECTIONS_DATA = 'GET_COLLECTIONS_DATA';
export const SET_COLLECTION = 'SET_COLLECTION';
export const GET_COLLECTION = 'GET_COLLECTION';
export const RESET_COLLECTION = 'RESET_COLLECTION';



const initialState={
    count: 1,
    hasMore: true,
    data:[],
    response: {
        results:[],
        errors: [],
    },
    collection:{
        count: 1,
        hasMore: true,
        data:[],
        response: {
            results:[],
            errors: [],
        },
    }
};


export default (state=initialState, action)=>{

    switch (action.type) {
        case SET_COLLECTIONS_DATA:
            return {
                ...state,
                response: {...state.data, ...action.data},
                data: action.data.results ? [...state.data, ...action.data.results] : state.data,
                count: action.data.results ? action.data.results.length ? state.count+1 : state.count : state.count,
                hasMore: action.data.results ? action.data.results.length ? true : false : false,
            };
        case RESET_COLLECTION:
            return {
                ...state,
                collection: initialState.collection,
            };
        case SET_COLLECTION:
            return {
                ...state,
                collection:{
                    response: {...state.collection.data, ...action.data},
                    data: action.data.results ? [...state.collection.data, ...action.data.results] : state.data,
                    count: action.data.results ? action.data.results.length ? state.collection.count+1 : state.collection.count : state.collection.count,
                    hasMore: action.data.results ? action.data.results.length ? true : false : false,
                }
            };
        default:
            return state;
    }
};
