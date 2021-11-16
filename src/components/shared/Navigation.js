
import { Turn as Hamburger } from 'hamburger-react'
import React, { useState } from "react";
import {  NavLink } from "react-router-dom";
import '../../App.css'
import Logo from '../../img/logo.png'
import useAuth from './useAuth';



// const userIcon=<FontAwesomeIcon icon ={faUser}/>
// const menuIcon=<FontAwesomeIcon icon ={faBars}/>
const  Navigation=() =>{
  const [isOpen, setOpen] = useState(false)
  const{user,logOut}=useAuth()

  const [navbarOpen, setNavbarOpen] = useState(false);
  // const [colorChange, setColorchange] = useState(false);
  // const changeNavbarColor = () =>{
  //    if(window.scrollY >= 1){
  //      setColorchange(true);
  //    }
  //    else{
  //      setColorchange(false);
  //    }
  // };
  // window.addEventListener('scroll', changeNavbarColor);
  return (
    <>
      {/* <nav className={colorChange ? 'navbar colorChange sticky top-0 ' : 'navbar'}> */}

      <div className="  mb-2 py-1 z-30 navigation  flex flex-wrap items-center justify-between px-2  ">
      
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between ">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <NavLink to='/'
              className="text-sm font-bold leading-relaxed inline-block ml-2 py-2 whitespace-nowrap uppercase  "
              
            >
             <NavLink className=' ' to='/'> <img className='md:w-32 w-22 ' src={Logo} alt="" /></NavLink>
            </NavLink>
            <button
              className="z-50 cursor-pointer text-xl  leading-none px-1 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
           <Hamburger toggled={isOpen} toggle={setOpen} />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="md:static absolute top-0 z-10 left-0   md:bg-transparent bg-black ul-block md:py-0 py-5 md:t-center text-bl md:flex flex-col lg:flex-row list-none lg:ml-auto">
            
                <NavLink to='/home' activeClassName="selected"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  nav_hover "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Home
               
                </NavLink>
                <NavLink to='/allservices' activeClassName="selected"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  nav_hover"
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Explore
                </NavLink>
                <NavLink to='/aboutus' activeClassName="selected"
                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  nav_hover  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               About Us
                </NavLink>
              
                
               {!user.email? <NavLink to='/login' activeClassName="selected"

                  className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  nav_hover  "
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
               Login
                </NavLink>:
               <div className='md:flex'>
                 <NavLink to='/dashboard' activeClassName="selected"

                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  nav_hover  "
                    onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                    Dashboard
                </NavLink>
                  <button className='inline-block px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  ' onClick={logOut}>
                  Logout
                </button>
                  <p className='inline-block px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  ' >
                  Hello <span className='ml-2'> {user.displayName}</span>
                </p>

               </div>
                }
                  
             
            </ul>
          </div>
        </div>
      </div>
      {/* </nav> */}
    </>
  );
}




export default Navigation;