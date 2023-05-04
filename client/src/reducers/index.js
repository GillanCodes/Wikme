import { combineReducers } from "redux";

import userReducer from "./user.reducer";
import wikiReducer from "./wiki.reducer";
import pageReducer from "./page.reducer";
import imagesReducer from "./image.reducer";

export default combineReducers ({
    userReducer,
    wikiReducer,
    pageReducer,
    imagesReducer
});