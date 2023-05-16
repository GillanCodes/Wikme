import { GET_PAGE_ERRORS } from "../actions/page.actions";

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
        default:
            return state;
    }
}