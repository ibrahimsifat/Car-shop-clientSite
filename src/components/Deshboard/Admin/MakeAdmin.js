import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const handleOnBlur=(e)=>{
        setEmail(e.target.value)
    }


    const handelMakeAdmin=(e)=>{
   
        const user={email}
        fetch('http://localhost:5000/users/admin',
        {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            setSuccess(true)
            setEmail('')
            console.log(data)})
        e.preventDefault()

    }
    return (
        <div className='flex justify-center flex-col items-center'>
          <form onSubmit={handelMakeAdmin} class="m-4 flex">
    	<input onBlur={handleOnBlur} 
        type='email'
         class="rounded-l-md w-96 p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
          placeholder="admin@mail.com"/>
		<button
         type='submit' 
        class="px-8 rounded-r-lg bg-yellow-400  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Make a Admin</button>
        
	</form>
    {
        success&&<div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
          <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
        </div>
      </div>
    }
        </div>
    );
};

export default MakeAdmin;