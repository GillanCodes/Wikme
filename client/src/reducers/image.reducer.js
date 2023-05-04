import { GET_IMAGES, UPLOAD_IMAGE } from "../actions/image.actions";

const initialState = {};

export default function imagesReducer(state = initialState, action)
{
    switch(action.type)
    {
        case GET_IMAGES:
            return action.payload;
        case UPLOAD_IMAGE:
            return [...state, action.payload];
        default:
            return state;
    }
}