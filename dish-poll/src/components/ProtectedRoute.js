import React from "react"
import {Navigate, Outlet} from "react-router-dom"
import { useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import {selectUser} from '../store/UserSlice'
 


const ProtectedRoute = () => {

  const isAuthenticated = useSelector(selectUser);

  const location =useLocation();

		return isAuthenticated ?  <Outlet /> :<Navigate to="/login"  state={{from :location}} /> ;

	}

export default ProtectedRoute;