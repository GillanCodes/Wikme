import axios from "axios";

export const GET_WIKIS = "GET_WIKIS";

export const getWikis = () => {
    return(dispatch) => {
        return axios({
            method: 'get',
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/wiki/`
        }).then((res) => {
            dispatch({type: GET_WIKIS, payload: res.data})
        }).catch((err) => console.log(err));
    }
}