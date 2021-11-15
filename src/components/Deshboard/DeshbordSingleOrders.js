import React from 'react';

const DeshbordSingleOrders = ({order}) => {
    const {img,title,Price}=order
    return (
        <div>
              <tbody class="bg-white">
            <tr>
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-24">
                          <img class="h-10 w-24 rounded-md"
                              src={img}
                              alt=""/>
                      </div>
    
                      <div class="ml-4">
                          <div class="text-sm leading-5 font-medium text-gray-900">{title}
                          </div>
                                                </div>
                  </div>
              </td>
    
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <div class="text-sm leading-5 text-gray-900">{Price}</div>
                  
              </td>
    
              <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                  <span
                      class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
              </td>
    
              <td
                  class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  Owner</td>
    
              <td
                  class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                  <a href="#fdg" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
                                        </tr>                            
                                    
                                    </tbody>
        </div>
    );
};

export default DeshbordSingleOrders;