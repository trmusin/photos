import {combineReducers} from "redux";
import appReducer from "./appReducer";
import searchReducer from "./searchReducer";
import homeReducer from "./homeReducer";
import favoritesReducer from "./favoritesReducer";
import collectionsReducer from "./collectionsReducer";
import historyReducer from "./historyReducer";



const rootReducer = combineReducers({
    app: appReducer,
    home: homeReducer,
    search: searchReducer,
    favorites: favoritesReducer,
    collections: collectionsReducer,
    history: historyReducer,
});

export default rootReducer;