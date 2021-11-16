import React from 'react';

const SingleHomeService = ({singleService,HandleServiceBooking}) => {
    const {img,Price,title,description,_id}=singleService
    return (
  
        <div className="md:w-80 bg-gray-800 shadow-md mx-auto rounded-xl p-6">
       
          <div className="">
            <div className="relative h-62 w-full mb-3 ">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button  className=" x-10 transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg></button>
              </div>
              <div className=''>
              <img src={img} alt="" className=" w-full   object-fill  rounded-2xl"/>
              </div>
            </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
           
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">{title}</h2>
                  <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                    INSTOCK</div>
                </div>
              </div>
              <div className="text-xl text-white font-semibold mt-1">${Price}</div>
              <div className="lg:flex  py-4  text-sm text-gray-600">
                <div className="flex-1 inline-flex items-center  mb-3">
                  <div className="w-full flex-none text-sm flex items-center text-gray-600">
                    <ul className="flex flex-row justify-center items-center space-x-2">
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                          <a href="#blue" className="block w-3 h-3 bg-blue-600 rounded-full"></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                          <a href="#yellow" className="block w-3 h-3  bg-yellow-400 rounded-full"></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                          <a href="#red" className="block w-3 h-3  bg-red-500 rounded-full"></a>
                        </span>
                      </li>
                      <li className="">
                        <span className="block p-1 border-2 border-gray-900 hover:border-green-500 rounded-full transition ease-in duration-300">
                          <a href="#green" className="block w-3 h-3  bg-green-500 rounded-full"></a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
             
              </div>
              <div className="flex space-x-2 text-sm font-medium justify-start">
                <button onClick={()=>HandleServiceBooking(_id)} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                  <span>Book</span>
                </button>
                <button title='Quick Review' className="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
     
      
    );
};

export default SingleHomeService;