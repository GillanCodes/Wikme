import axios from "axios";

export const GET_WIKIS = "GET_WIKIS";
export const CREATE_WIKI = "CREATE_WIKI";
export const UPDATE_WIKI = "UPDATE_WIKI";
export const DELETE_WIKI = "DELETE_WIKI";

export const GET_WIKI_ERRORS = "GET_WIKI_ERRORS";

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

export const createWiki = ({name, desc}) => {
    return(dispatch) => {
        return axios({
            method: "post",
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/wiki`,
            data: {
                name,
                description: desc
            }
        }).then((res) => {
            if (res.data.errors)
            {
                dispatch({type: GET_WIKI_ERRORS, payload: res.data.errors});   
            } else {
                dispatch({type: CREATE_WIKI, payload: res.data});
                dispatch({type: GET_WIKI_ERRORS, payload: ""});
            }
        }).catch(err => console.log(err));
    }
}

export const updateWiki = ({id, name, desc, isPublic}) =>  {
    return(dispatch) => {
        return axios({
            method: 'patch',
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/wiki/${id}`,
            data : {
                name,
                description: desc,
                isPublic
            }
        }).then((res) => {
            if (res.data.errors)
            {
                dispatch({type: GET_WIKI_ERRORS, payload: res.data.errors});   
            } else {
                dispatch({type: UPDATE_WIKI, payload: res.data});
                dispatch({type: GET_WIKI_ERRORS, payload: ""});
            }
        }).catch(err => console.log(err));
    }
}

export const deleteWiki = (id) => {
    console.log(id);
    return(dispatch) => {
        return axios({
            method: 'delete',
            withCredentials: true,
            url: `${process.env.REACT_APP_API_URL}/wiki/${id}`,
        }).then((res) => {
            console.log(res.data)
            dispatch({type: DELETE_WIKI, payload: res.data});
        }).catch(err => console.log(err));
    }
}