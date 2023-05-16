import { GET_IMAGE_ERRORS } from "../actions/image.actions";
import { GET_PAGE_ERRORS } from "../actions/page.actions";
import { GET_WIKI_ERRORS } from "../actions/wiki.actions";

const initialState = {
    imageErrors: [],
    pageErrors: [],
    wikiErrors: [],
}

export default function errorsReducer(state = initialState, action)
{
    switch(action.type)
    {
        case GET_PAGE_ERRORS:
            return {
                pageErrors: action.payload,
                wikiErrors: [],
                imageErrors: []
            }
        case GET_WIKI_ERRORS:
            return {
                pageErrors: [],
                imageErrors: [],
                wikiErrors: action.payload
            }
        case GET_IMAGE_ERRORS:
            return {
                pageErrors: [],
                imageErrors: action.payload,
                wikiErrors: []
            }
        default:
            return state;
    }
}