import {SET_FAVORITES} from "../reducers/favoritesReducer";

export default {
    setFavorites: favorites => ({
        type: SET_FAVORITES,
        favorites
    }),
};
