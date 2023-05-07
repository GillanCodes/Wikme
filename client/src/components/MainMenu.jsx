import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { isEmpty } from '../utils';
import { NavLink } from "react-router-dom";
import axios from "axios";


export default function MainMenu() {

  const [load, setLoad] = useState(false);
  const currentUser = useSelector(state => state.userReducer); 


  useEffect(() => {
    console.log(isEmpty(currentUser))
    if(!isEmpty(currentUser))
    {
      setLoad(true);
    }
  }, [currentUser]);

  const logoutHandle = () => {
    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_API_URL}/auth/logout`
    }).then(() => {
      window.location = "/auth"
    })
  }

  // const animation = (e, type) => {
  //   if (type === "in") { e.target.classList.replace('close', 'open') }
  //   if (type === "out") { e.target.classList.replace('open', 'close') }
  // }

  return (
    <div className='main-menu navbar-container'>
        <div className="content">
            <div className="items">
              <div className="item">
                <NavLink to={"/"}>
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </NavLink>
              </div>
              <div className="item">
                <NavLink to={'/wikis'}>
                  <i className="fa-solid fa-book"></i>
                  <p>Wiki</p>  
                </NavLink> 
              </div>
              {load ? (
                <>
                  <div className="item">
                    <NavLink to={"/me"}>
                      <i className="fa-solid fa-user"></i>
                      <p>{currentUser.username}</p>
                    </NavLink>
                  </div>
                  <div className="item" onClick={() => logoutHandle()}>
                    <p>Logout</p>
                  </div>
                </> 
              ) : (
                <div className="item">
                  <NavLink to={"/auth"}> 
                    <p>Login/Register</p>
                  </NavLink>
                </div>
              )} 
            </div>
        </div>
    </div>
  )
}