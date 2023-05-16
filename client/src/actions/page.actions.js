import axios from "axios";

export const GET_PAGES = "GET_PAGES";
export const CREATE_PAGE = "CREATE_PAGE";
export const DELETE_PAGE = "DELETE_PAGE";
export const UPDATE_PAGE = "UPDATE_PAGE";
export const UPDATE_CONTENT = "UPDATE_CONTENT";

export const GET_PAGE_ERRORS = "GET_PAGE_ERRORS";

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
            console.log(res.data.errors)
            if (res.data.errors) 
            {
                dispatch({type: GET_PAGE_ERRORS, payload: res.data.errors});
            } else {
                dispatch({type: CREATE_PAGE, payload: res.data});
                dispatch({type: GET_PAGE_ERRORS, payload: ""})
            }
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

export const updatePage = ({id, name}) => {
    return (dispatch) => {
        return axios({
            method: 'patch',
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/page/${id}/`,
            data: {
                name
            }
        }).then((res) => {
            if (res.data.errors) 
            {
                dispatch({type: GET_PAGE_ERRORS, payload: res.data.errors});
            } else 
            {
                dispatch({type: UPDATE_PAGE, payload: res.data})
                dispatch({type: GET_PAGE_ERRORS, payload: ""})
            }
        }).catch(err => console.log(err));
    }
}

export const updateContent = (id, page) => {
    return (dispatch) => {
        return axios({
            method:"patch",
            withCredentials: true,
            url: `http://localhost:5050/api/wiki/${id}/page`,
            data: {
                content: page
            }
        }).then((res) => {
            dispatch({type: UPDATE_CONTENT, payload: res.data})
        }).catch(err => console.log(err));
    }
}