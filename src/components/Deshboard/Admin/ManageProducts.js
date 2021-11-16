import React, { useState } from 'react';
import UseAllServices from '../../shared/UseAllServices';



const ManageProducts = () => {
    const [serivces,setServices]=UseAllServices()
    const [success,setSuccess]=useState(false)
   const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to delete?');
    if (proceed) {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setSuccess(true)
                    const remainingUsers = serivces.filter(serivce => serivce._id !== id);
                    setServices(remainingUsers);
                }
            });
    }
}
    return (
        <div>
            {
        success&&<div class="flex bg-green-100 rounded-lg p-4 mb-4 text-sm text-green-700" role="alert">
        <svg class="w-5 h-5 inline mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
        <div>
          <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
        </div>
      </div>
    }
         <div className="">
            {
                serivces.map(singleService=><ManageSingleProduct
                key={singleService.id}
                singleService={singleService}
                handleDelete={handleDelete}
                ></ManageSingleProduct>)
            }
        </div>
        </div>
    );
};
const ManageSingleProduct = ({singleService,handleDelete}) => {
    const {img,title,Price,_id}=singleService
    return (
        <div className=' my-2'>
            
              <tbody className="bg-blue-100 ">
            <tr>
              <td className="px-6 py-4  border-b border-gray-200">
                  <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-24">
                          <img className="h-10 w-24 rounded-md"
                              src={img}
                              alt=""/>
                      </div>
    
                      <div className="ml-4">
                          <div className="text-sm leading-5 font-medium text-gray-900">{title}
                          </div>
                                                </div>
                  </div>
              </td>
    
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{Price}</div>
                  
              </td>
    
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </td>
    
              <td
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner</td>
    
              <td 
                  className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <button onClick={()=>handleDelete(_id)} className="text-indigo-600 hover:text-indigo-900">Delete</button>
              </td>
                                        </tr>                            
                                    
                                    </tbody>
        </div>
    );
};
export default ManageProducts;