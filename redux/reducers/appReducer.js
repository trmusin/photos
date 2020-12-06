export const SHOW_LOADER = 'SHOW_LOADER';


const initialState ={
    showLoader: false,
    history: [],
};


export default (state=initialState, action)=>{

    switch (action.type) {
        case SHOW_LOADER:
            return {
                ...state,
                showLoader: action.show,
            };
        default:
            return state;
    }
};
