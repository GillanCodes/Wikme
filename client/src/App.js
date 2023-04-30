import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Routes from "./components/Routes";
import './styles/index.scss'
import axios from "axios";
import { getUser } from "./actions/user.actions";
import { UIdContext } from "./App.context";


function App() {

  const [UId, setUId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method:'get',
        withCredentials:true,
        url:`${process.env.REACT_APP_API_URL}/jwtid`
      }).then((res) => {
        setUId(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
    fetchToken();

    if (UId)
    {
      dispatch(getUser(UId));
    }
  }, [UId, dispatch])

  return (
    <>
      <UIdContext.Provider value={UId} >
        <Routes />
      </UIdContext.Provider>
    </>
  );
}

export default App;
