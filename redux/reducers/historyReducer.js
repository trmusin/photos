export const SET_HISTORY = 'SET_HISTORY';

const initialState ={
    history: {},
};

export default (state=initialState, action)=>{

    switch (action.type) {

        case SET_HISTORY:
            let historyStorage = localStorage.getItem('history');
            let history = historyStorage ? {...JSON.parse(historyStorage), ...action.history } : action.history;
            localStorage.setItem("history", JSON.stringify(history));

            return {
                ...state,
                history: history,
            };
        default:
            return state;
    }
};
