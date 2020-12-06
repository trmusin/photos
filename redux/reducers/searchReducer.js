export const SET_SEARCH_DATA = 'SET_SEARCH_DATA';
export const GET_SEARCH_DATA = 'GET_SEARCH_DATA';
export const RESET_SEARCH = 'RESET_SEARCH';


const initialState={
    count: 1,
    hasMore: true,
    data:[],
    response: {
        results:[],
        errors: [],
    },
};


export default (state=initialState, action)=>{

    switch (action.type) {
        case RESET_SEARCH:
            return {
                ...state,
                ...initialState
            };
        case SET_SEARCH_DATA:
            return {
                ...state,
                response: {...state.data, ...action.data},
                data: action.data.results ? [...state.data, ...action.data.results] : state.data,
                count: action.data.results ? action.data.results.length ? state.count+1 : state.count : state.count,
                hasMore: action.data.results ? action.data.results.length ? true : false : false,
            };
        default:
            return state;
    }
};