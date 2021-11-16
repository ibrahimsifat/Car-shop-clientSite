import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './AddService.css'
const AddService = () => {
  const [success,setSuccess]=useState(false)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://thawing-headland-16581.herokuapp.com/services',data)
.then(res=>{
   
    setSuccess(true)
})
    };



    return (
        <div className='my-16'>
            <div className="mx-auto max-w-md px-6 py-12 bg-white border-0  sm:rounded-3xl">
    <h1 className="text-2xl font-bold mb-8 text-center">Add a new Service</h1>
    {
        success&&<div className="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
        <svg className="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
          <span className="font-medium">Success alert!</span> Change a few things up and try submitting again.
        </div>
      </div>
    }
    <form onSubmit={handleSubmit(onSubmit)}>
      

      <div className="relative z-0 w-full mb-5">
        <input
        {...register("title")}
          type="text"
          required
          name="title"
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="text" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Title</label>
        <span className="text-sm text-red-600 hidden" id="error">Title is required</span>
      </div>


      <div className="relative z-0 w-full mb-5">
        <input
        {...register("Price")}
          type="Number"
          required
          name="Price"
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="text" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Price</label>
        <span className="text-sm text-red-600 hidden" id="error">Title is required</span>
      </div>

      <div className="relative z-0 w-full mb-5">
        <input
        {...register("img")}
          
          id="myURL" name="myURL" type="url"
          required

          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="text" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Price</label>
        <span className="text-sm text-red-600 hidden" id="error">Title is required</span>
      </div>
     

      <div className="relative z-0 w-full mb-5">
        <textarea
        {...register("description")}
          type="text"
          name="description"
          required
          placeholder=""
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label for="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Description</label>
        <span className="text-sm text-red-600 hidden" id="error">Description is required</span>
      </div>

     

      

     

    
      <input  className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-blue-900 hover:bg-blue-600 hover:shadow-lg focus:outline-none" type="submit" value='Add Service' />
    </form>
  </div>
        </div>
    );
};

export default AddService;