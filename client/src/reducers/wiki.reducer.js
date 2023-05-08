import { CREATE_WIKI, DELETE_WIKI, GET_WIKIS, UPDATE_WIKI } from "../actions/wiki.actions";

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
        case DELETE_WIKI:
            return state.filter((wiki) => wiki._id !== action.payload.id);
        default:
            return state;
    }
}