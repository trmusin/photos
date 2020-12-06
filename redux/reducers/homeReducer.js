export const SET_HOME_DATA = 'SET_HOME_DATA';
export const GET_HOME_DATA = 'GET_HOME_DATA';



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
        case SET_HOME_DATA:
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
