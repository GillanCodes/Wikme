import axios from "axios";

export const GET_IMAGES = "GET_IMAGES";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";

export const GET_IMAGE_ERRORS = "GET_IMAGE_ERRORS";

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
            if (res.data.errors) 
            {
                dispatch({type: GET_IMAGE_ERRORS, payload: res.data.errors});
            } else {
                dispatch({type: UPLOAD_IMAGE, payload: res.data});
                dispatch({type: GET_IMAGE_ERRORS, payload: ""})
            }
        })
    }
}

export const deleteImage = (id, path) => {
    return(dispatch) => {
        return axios({
            method:"delete",
            withCredentials:true,
            url:`${process.env.REACT_APP_API_URL}/image/`,
            data: {
                id, 
                path
            }
        }).then((res) => {
            dispatch({type: DELETE_IMAGE, payload: res.data});
        }).catch(err => console.log(err));
    };
};