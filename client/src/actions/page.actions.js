import axios from "axios";

export const GET_PAGES = "GET_PAGES";

export const getPages = (wikiId) => {
    return(dispatch) => {
        return axios({
            method: "get",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/wiki/${wikiId}/page`
        }).then((res) => {
            dispatch({type: GET_PAGES, payload: res.data});
        }).catch((err) => console.log(err));
    }
}