import { useEffect, useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from '../src/components/Home/Home'
import ServiceBooking from './components/Home/HomeService/ServiceBooking';
import AllService from './components/Home/HomeService/AllService';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AuthProvider from './components/context/AuthProvider';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import Navigation from '../src/components/shared/Navigation'
import Dashboard from './components/Deshboard/Dashboard';
function App() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // This function will scroll the window to the top 
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' // for smoothly scrolling
      });
    };




  return (
    <div>
           {showButton && (
        <button onClick={scrollToTop} className="back-to-top md:text-4xl text-3xl hover:bg-purple-700 bg-purple-900 px-2 py-2 duration-700">
       <i className="fas fa-chevron-up"></i>
        </button>
      )}
<AuthProvider>
  
<BrowserRouter>
   <Navigation></Navigation>
      
     
   <Switch>
     
     <Route exact path='/'> 
         <Home></Home>
     </Route>
     <Route exact path='/home'> 
         <Home></Home>
     </Route>
  
     <PrivateRoute  path='/servicebooking/:serviceId'> 
         <ServiceBooking></ServiceBooking>
     </PrivateRoute>
  
     <PrivateRoute  path='/dashboard'> 
         <Dashboard></Dashboard>
     </PrivateRoute>
     <Route  path='/allservices'> 
         <AllService></AllService>
     </Route>
     <Route  path='/login'> 
         <Login></Login>
     </Route>
  
     <Route  path='/signup'> 
         <SignUp></SignUp>
     </Route>
  
   

   </Switch>


</BrowserRouter>

</AuthProvider>
    </div>
  );
}

export default App;
