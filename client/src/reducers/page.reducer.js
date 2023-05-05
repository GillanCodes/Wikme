import { CREATE_PAGE, GET_PAGES } from "../actions/page.actions";

const initialState = {};

export default function pageReducer(state = initialState, action)
{
    switch(action.type)
    {
        case GET_PAGES:
            return action.payload;
        case CREATE_PAGE:
            return [
                ...state,
                action.payload
            ]
        default:
            return state;
    }
}