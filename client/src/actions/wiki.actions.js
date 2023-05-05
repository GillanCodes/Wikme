import axios from "axios";

export const GET_WIKIS = "GET_WIKIS";
export const CREATE_WIKI = "CREATE_WIKI";

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
            dispatch({type: CREATE_WIKI, payload: res.data});
        }).catch(err => console.log(err));
    }
}