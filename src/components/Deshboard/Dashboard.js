import React from 'react';
import { NavLink,Switch,Route,useRouteMatch } from 'react-router-dom';
import DashboardReview from './DashboardReview';

import '../../App.css'
import Payment from './Payment/Payment';
import DeshbordOrder from './DeshbordOrder';
import MakeAdmin from './Admin/MakeAdmin';
import useAuth from '../shared/useAuth';
import AdminRoute from '../Login/AdminRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {admin}=useAuth()
    return (
        <div class="min-h-screen flex">
        <div class="py-6 px-10 ">
          
          <div class="flex items-center space-x-4  p-2 bg-indigo-600 rounded-md">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
              </svg>
            </div>
            <div>
              <p class="text-lg text-white font-semibold">Dashboard</p>
            </div>
          </div>
          <div class="mt-8">
            <ul class="">






            <li>
                <NavLink to={`${url}/insideDashboard`}  activeClassName="selected"  class=" my-2 block flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                  My Order</NavLink>
        
                  </li>
                  <li>
                <NavLink  activeClassName="selected" to={`${url}/review`} class=" my-2 block flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                  Review</NavLink>
                  </li>
                  <li>
                <NavLink  activeClassName="selected" to={`${url}/pay`} class=" my-2 inline-block flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                  Payment</NavLink>
     
                  </li>
              { admin&& 
               <div>
                 <li>
                     <NavLink  activeClassName="selected" to={`${url}/makeadmin`} class=" my-2 inline-block flex items-center text-sm font-semibold text-gray-500 hover:text-indigo-600 transition duration-200">
               
                     Make Admin</NavLink>
     
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
</Switch>
        </div>
      
      </div>
    );
};

export default Dashboard;