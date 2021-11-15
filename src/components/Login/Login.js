import React from 'react';
import { NavLink ,useHistory,useLocation} from 'react-router-dom';
// import LoginBanner from '../../img/login.png'

import useAuth from '../shared/useAuth';

const Login = () => {
const {signInUsingGoolge,handelUserPassword,
	handleUserEmail,login,error,setError,setIsLoading}=useAuth()

	let history=useHistory()
    let location=useLocation()
    const redirect_rui=location.state?.from || '/'

// Redicreting of signup 

    const handleLoginUser=()=>{
		setIsLoading(true);
        login()
        .then(result=>{
            
             history.replace(redirect_rui)
			 setError('')
        })
        .catch(error=>{
            setError(error.code)
        })
		.finally(() => setIsLoading(false));
    }
    return (
        <div>
		  
          <div className=" container mx-auto my-32 mx-auto grid md:grid-cols-2  justify-center items-center shadow py-10 rounded-2xl">

		<div className='ml-auto'>
<img  className='px-4' src={'LoginBanner'} alt="" />
		</div>
	<div className="md:ml-12 ">
		<div className="bg-white flex justify-center items-center">
			<div>
				<div>
<h2 className='text-red-500'>{error}</h2>
					<div>
						<span className="text-sm text-gray-900">Welcome back</span>
						<h1 className="text-2xl font-bold">Login to your account</h1>
					</div>
						<div className="my-3">
							<label className="block text-md mb-2" for="email">Email</label>
							<input onBlur={handleUserEmail} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="email" placeholder="email"/>
        </div>
					<div className="mt-5">
						<label className="block text-md mb-2" for="password">Password</label>
						<input onBlur={handelUserPassword} className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none" type="password" placeholder="********"/>
        </div>
						
		<button 
		onClick={handleLoginUser}
		className="mt-4 mb-3 w-full bg-green-500 hover:bg-green-400 text-white py-2 rounded-md transition duration-100">Login now</button>
							
				</div>
				<div
								onClick={signInUsingGoolge}
								className="flex  space-x-2 justify-center items-end bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md transition duration-100">

            <img className=" h-5 cursor-pointer" src="https://i.imgur.com/arC60SB.png" alt=""/>
			<button
			
			 >Or sign-in with google</button>
								</div>
				<p className="mt-8"> Dont have an account? <NavLink className="cursor-pointer text-sm text-red-500" to='/signup'> Join today</NavLink></p>
			</div>
		</div>
	</div>
</div>
        </div>
    );
};

export default Login;