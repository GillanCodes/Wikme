import { DELETE_PAGE } from "../actions/page.actions";
import { CREATE_WIKI, GET_WIKIS, UPDATE_WIKI } from "../actions/wiki.actions";

const initialState = {};

export default function wikiReducer(state = initialState, action)
{
    switch(action.type)
    {
        case GET_WIKIS:
            return action.payload;
        case CREATE_WIKI:
            return [
                ...state,
                action.payload
            ]
        case UPDATE_WIKI:
            return state.map((wiki) => {
                if (wiki._id === action.payload._id)
                {
                    return action.payload;
                } else {
                    return wiki;
                }
            })
            break;
        case DELETE_PAGE:
            return state.filter((wiki) => wiki._id !== action.payload._id)
        default:
            return state;
    }
}