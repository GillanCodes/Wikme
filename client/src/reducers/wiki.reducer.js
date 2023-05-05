import { CREATE_WIKI, GET_WIKIS } from "../actions/wiki.actions";

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
        default:
            return state;
    }
}