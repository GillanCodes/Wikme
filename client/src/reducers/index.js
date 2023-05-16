import { combineReducers } from "redux";

import errorsReducer from "./errors.reducer";
import userReducer from "./user.reducer";
import wikiReducer from "./wiki.reducer";
import pageReducer from "./page.reducer";
import imagesReducer from "./image.reducer";

export default combineReducers ({
    errorsReducer,
    userReducer,
    wikiReducer,
    pageReducer,
    imagesReducer
});