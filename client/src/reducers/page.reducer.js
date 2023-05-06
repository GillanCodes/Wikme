import { CREATE_PAGE, DELETE_PAGE, GET_PAGES, UPDATE_PAGE } from "../actions/page.actions";

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
        case DELETE_PAGE:
            return state.filter((page) => page._id !== action.payload.id);
        case UPDATE_PAGE: 
            return state.map((page) => {
                if (page._id === action.payload._id)
                {
                    return action.payload;
                } else {
                    return page;
                }
            })
        default:
            return state;
    }
}