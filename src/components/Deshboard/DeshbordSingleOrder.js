import React from 'react';
import UseAllServices from '../shared/UseAllServices';

const DeshbordSingleOrder= ({order})=> {
  const {email,title,img,userName,_id}=order
  const [serivces,setServices]=UseAllServices()

  const handleDelete = id => {
   const proceed = window.confirm('Are you sure, you want to delete?');
   if (proceed) {
       const url = `http://localhost:5000/orders/${id}`;
       fetch(url, {
           method: 'DELETE'
       })
           .then(res => res.json())
           .then(data => {
               if (data.deletedCount > 0) {
                   alert('deleted successfully');
                   const remainingUsers = serivces.filter(serivce => serivce._id !== id);
                   setServices(remainingUsers);
               }
           });
   }
}
        return (
          <div>
          <div className="bg-white my-4 ">
        <ul className='w-full md:flex justify-between items-center'>
          <li className="px-6 py-4  ">
              <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-24">
                      <img className="h-10 w-24 rounded-md"
                          src={img}
                          alt=""/>
                  </div>

                  <div className="ml-4">
                      <div className="text-sm  font-medium text-gray-900">{title}
                      </div>
                                            </div>
              </div>
          </li>
          <li
              className="px-6 py-4   text-sm  text-gray-500">
              User Name: {userName}</li>
          <li className="px-6 py-4  ">
              <div className="text-sm  text-gray-900">{email}</div>
              
          </li>

          <li className="px-6 py-4  ">
              <span
                  className="px-2 inline-flex text-xs  font-semibold rounded-full bg-green-100 text-green-800">Pending</span>
          </li>

          <li
              className=" py-4  text-right  text-sm  font-medium">
              <button onClick={()=>handleDelete(_id)} className="text-indigo-600 hover:text-indigo-900 mr-6 md:mr-8">Edit</button>
          </li>
                                    </ul>                            
                                
                                </div>
    </div>
        );

}

export default DeshbordSingleOrder;