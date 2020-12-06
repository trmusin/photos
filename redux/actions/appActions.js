import {SHOW_LOADER, SET_HISTORY} from "../reducers/appReducer";

export default {
    showLoader: show => ({
        type: SHOW_LOADER,
        show
    }),
};
