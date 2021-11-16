import React from 'react';
import { NavLink,Switch,Route,useRouteMatch } from 'react-router-dom';
import DashboardReview from './DashboardReview';

import '../../App.css'
import Payment from './Payment/Payment';
import DeshbordOrder from './DeshbordOrder';
import MakeAdmin from './Admin/MakeAdmin';
import useAuth from '../shared/useAuth';
import AdminRoute from '../Login/AdminRoute';
import ManageAllOrders from './Admin/ManageAllOrders';

import ManageProducts from './Admin/ManageProducts';
import AddService from './Admin/AddService/AddService';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin,logOut}=useAuth()
    return (
        <div className="min-h-screen flex">
        <div className="py-6 px-10 ">
          
          <div className="flex items-center space-x-4  p-2 bg-indigo-600 rounded-md">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <div>
              <p className="text-lg text-white font-semibold">Dashboard</p>
            </div>
          </div>
          <div className="mt-8">
            <ul className="">






            <li>
                <NavLink to={`${url}/insideDashboard`}  activeClassName="selected"  className=" my-7 block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                  My Order</NavLink>
        
                  </li>
                  <li>
                <NavLink  activeClassName="selected" to={`${url}/review`} className=" my-7 block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                 Add A Review</NavLink>
                  </li>
                  <li>
                <NavLink  activeClassName="selected" to={`${url}/pay`} className=" my-7 inline-block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                  Payment</NavLink>
     
                  </li>
              { admin&& 
               <div>
                 <li>
                     <NavLink  activeClassName="selected" to={`${url}/makeadmin`} className=" my-7 inline-block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                     Make Admin</NavLink>
     
                  </li>
                 <li>
                     <NavLink  activeClassName="selected" to={`${url}/manageallorder`} className=" my-7 inline-block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                     Manage All Orders</NavLink>
     
                  </li>
                 <li>
                     <NavLink  activeClassName="selected" to={`${url}/addservice`} className=" my-7 inline-block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                    Add Service</NavLink>
     
                  </li>
                 <li>
                     <NavLink  activeClassName="selected" to={`${url}/manageproduct`} className=" my-7 inline-block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                     Manage Product</NavLink>
     
                  </li>
                 <li>
                     <button onClick={logOut}  className=" my-7 inline-block flex items-center text-md font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                   Log Out</button>
     
                  </li>
                </div>}







            </ul>
          </div>
        
        </div>
        <div className="bg-indigo-50 flex-grow py-12 px-10">
                                    
<Switch>
<Route path={`${path}/insideDashboard`}>
<DeshbordOrder></DeshbordOrder>
</Route>
<Route exact path={`${path}`}>
<DeshbordOrder></DeshbordOrder>
</Route>
<Route path={`${path}/review`}>
  <DashboardReview></DashboardReview>
</Route>
<Route path={`${path}/pay`}>
  <Payment></Payment>
</Route>
<AdminRoute path={`${path}/makeadmin`}>
  <MakeAdmin></MakeAdmin>
</AdminRoute>
<AdminRoute path={`${path}/manageallorder`}>
  <ManageAllOrders></ManageAllOrders>
</AdminRoute>
<AdminRoute path={`${path}/addservice`}>
  <AddService></AddService>
</AdminRoute>
<AdminRoute path={`${path}/manageproduct`}>
  <ManageProducts></ManageProducts>
</AdminRoute>
</Switch>
        </div>
      
      </div>
    );
};

export default Dashboard;