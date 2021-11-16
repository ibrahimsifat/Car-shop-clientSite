import React from 'react';
import UseAllServices from '../shared/UseAllServices';

const DeshbordSingleOrders = ({order}) => {
    const {img,title,Price,_id}=order
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
              <div className="bg-white my-4">
            <ul className='w-full md:flex justify-between items-center'>
              <li className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
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
              </li>
    
              <li className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div className="text-sm leading-5 text-gray-900">{Price}</div>
                  
              </li>
    
              <li className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span
                      className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Pending</span>
              </li>
    
              <li
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner</li>
    
              <li
                  className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <button onClick={()=>handleDelete(_id)} className="text-indigo-600 hover:text-indigo-900">Delete</button>
              </li>
                                       </ul>                            
                                    
                                    </div>
        </div>
    );
};

export default DeshbordSingleOrders;