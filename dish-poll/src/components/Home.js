import React from 'react'


import './Home.css'
import { NavLink } from "react-router-dom";

import {logout} from '../store/UserSlice'
import { useSelector, useDispatch } from 'react-redux';


function Home({name}) {
// console.log(name);
const dispatch=useDispatch();

const data = useSelector(state=> state.poll)

// console.log(data+"its from data")
const logoutHandler=()=>{
  dispatch(logout())
}
  return (
   <div className="tab-container">
    <div className='tabs'>
    <NavLink to="/polling" className="nav-link"> Start Polling</NavLink>
    <NavLink to="/result" className="nav-link">Result</NavLink>

    </div>
    <button  className='logout' onClick={logoutHandler} >LOG OUT</button>
    </div>
  )
}

export default Home;