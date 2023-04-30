import axios from "axios";

export const GET_USER = "GET_USER";

export const getUser = (UId) => {
    return (dispatch) => {
        return axios({
            method: "get",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/user/${UId}`
        }).then((res) => {
            dispatch({type: GET_USER, payload: res.data});
        }).catch((error) => console.log(error));
    }
}