import axios from "axios";

export const GET_IMAGES = "GET_IMAGES";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";

export const getImages = () => {
    return(dispatch) => {
        return axios({
            method: "get",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/image/`
        }).then((res) => {
            dispatch({type: GET_IMAGES, payload: res.data});
        }).catch((err) => console.log(err));
    }
}

export const postImage = (file) => {
    return(dispatch) => {
        return axios({
            method: "post",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/image/`,
            data: file
        }).then((res) => {
            dispatch({type: UPLOAD_IMAGE, payload: res.data});
        })
    }
}