import {SET_HISTORY} from "../reducers/historyReducer";

export default {
    setHistory: history => ({
            type: SET_HISTORY,
            history
    }),
};
