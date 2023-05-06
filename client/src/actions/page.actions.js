import axios from "axios";

export const GET_PAGES = "GET_PAGES";
export const CREATE_PAGE = "CREATE_PAGE";
export const DELETE_PAGE = "DELETE_PAGE";

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

export const createPage = ({name, id}) => {
    return(dispatch) => {
        return axios({
            method: 'post',
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/wiki/${id}/page`,
            data: {
                name
            }
        }).then((res) => {
            dispatch({type: CREATE_PAGE, payload: res.data});
        }).catch(err => console.log(err));
    }
}

export const deletePage = (id) => {
    return(dispatch) => {
        return axios({
            method:"delete",
            withCredentials:true,
            url: `${process.env.REACT_APP_API_URL}/page/${id}`
        }).then((res) =>{
            dispatch({type: DELETE_PAGE, payload: res.data});
        }).catch(err => console.log(err));
    }
}