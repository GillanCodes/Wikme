import { GET_IMAGES } from "../actions/image.actions";

const initialState = {};

export default function imagesReducer(state = initialState, action)
{
    switch(action.type)
    {
        case GET_IMAGES:
            return action.payload;
        default:
            return state;
    }
}