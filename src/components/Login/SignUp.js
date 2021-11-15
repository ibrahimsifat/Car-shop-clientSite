import React from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
// import SignImg from '../../../img/register.png'
import useAuth from '../shared/useAuth';
;


const SignUp = () => {
const {
    saveUser,
  
    email,
    name,
    error,
    setError,
    handelUserPassword,
    handleUserEmail,
    createNewUser,
    handelUserName,
    setNewUserName,
    setIsLoading
    }=useAuth()
 
    let history=useHistory()
    let location=useLocation()
    const redirect_rui=location.state?.from || '/'

// Redicreting of signup 

    const handleNewUser=()=>{
        setIsLoading(true);
        createNewUser()
        .then(result=>{
            setNewUserName()
            setError('')
            saveUser(email,name,'POST')
           history.push(redirect_rui)
           setError('')
        })
        .catch(error=>{
            setError(error.code)
        })
        .finally(() => setIsLoading(false));
        
    }


    return (
        <div className='w-9/12 mx-auto' > 
            
<div className="min-w-screen min-h-screen flex flex-col items-center justify-center px-5 py-5">
    <h1 className=' mb-8 text-red-700'>{error}</h1>
    <div className=" box-shadow rounded-3xl  w-full overflow-hidden" >
        <div className="md:flex w-full items-center">
            <div className="hidden md:block  bg-white-500 py-10 px-10">
          
          <img src={'SignImg'} alt="" />

           </div>
            <from className="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div className="text-center mb-10">
                    <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                    <p>Enter your information to register</p>
                </div>
                <div>
                    <div className="flex -mx-3">
                        <div className="w-full px-1 mb-5">
                            <label htmlhtmlFor="" className="text-xs font-semibold px-1">your name</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg"></i></div>
                                <input required onBlur={handelUserName} type="text" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="John"/>
                            </div>
                        </div>
                      
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-1 mb-5">
                            <label htmlhtmlFor="" className="text-xs font-semibold px-1">Email</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input required onBlur={handleUserEmail} type="email" className="w-full -ml-10 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="youreail@example.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-1 mb-12">
                            <label htmlhtmlFor="" className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input required onBlur={handelUserPassword}  type="password" className="w-full -ml-10 pl-3 pr-1 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-red-500" placeholder="************"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-5">
                            
                            <button type='submit'
                          onClick={handleNewUser}
                            className="block w-full max-w-xs mx-auto bg-blue-700 hover:bg-blue-900 focus:bg-blue-900 text-white duration-500 rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
                            
                        </div>
                    </div>
                    <p className='pt-2'>Already Registered?
                        <NavLink className='text-red-500 pl-1 cursor-pointer text-sm' to="/login"> Sign In</NavLink>
                    </p>
                </div>
            </from>
        </div>
    </div>
</div>
        </div>
    );
};

export default SignUp;