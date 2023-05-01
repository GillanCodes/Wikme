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
              {/* <div className="item has-dropdown">
                <div className="dropdown-text">
                  <p>Wiki</p>
                </div>
                <div className="dropdown">
                  <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </div>
              </div> */}
              <div className="item">
                <NavLink to={"/"}>Home</NavLink>
              </div>
              {load ? (
                <>
                  <div className="item">
                    <NavLink to={"/me"}>{currentUser.username}</NavLink>
                  </div>
                  <div className="item" onClick={() => logoutHandle()}>
                    <p>Logout</p>
                  </div>
                </> 
              ) : (
                <div className="item">
                  <NavLink to={"/auth"}>Login/Register</NavLink>
                </div>
              )} 
            </div>
        </div>
    </div>
  )
}