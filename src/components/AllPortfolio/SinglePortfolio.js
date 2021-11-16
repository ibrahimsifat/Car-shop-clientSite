// import { faHeart,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css'

import Zoom from 'react-reveal/Zoom';
// import Jump from 'react-reveal/Jump';


// const love=<FontAwesomeIcon icon={faHeart}/>

const SinglePortfolio = ({service}) => {
  const {img,title}=service
    const [showModal, setShowModal] = React.useState(false);
    return (
   
           <div className=" mx-auto w-64  img-hover duration-700  ">  
            <div className="shadow hover:shadow-lg transition duration-300 ease-in-out xl:mb-0 lg:mb-0 md:mb-0 mb-6 cursor-pointer group">
              <Zoom >   
                <div className="overflow-hidden relative item-zoom">
               
                <img className="w-full   transform transition hover:scale-105 duration-300 ease-in-out " src={img} alt="" />
          
                    <div className="absolute bottom-0 duration-700 h-full w-full flex justify-center items-center bg-gradient-to-r from-green-500  group-hover:bg-opacity-50   transition duration-500 ease-in-out opacity-0 group-hover:opacity-100 ">
                
   
   
               <div className='flex flex-col  justify-center items-center '>

               {/* <h2 className=' text-2xl font-semibold text-white'>{title}</h2> */}
                
                <i
        className="   font-bold uppercase text-2xl hover:text-3xl px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      ><h1 className=' px-3 py-1 text-white hover:scale transition transform duration-500 rounded-full text-black'><i className="fas fa-search"></i></h1>
 
      </i>
               </div>

                    </div>
                </div>
            </Zoom>
            </div>
 

    <>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between">
                  
                  <button
                    className="p-1 ml-auto mr-3 border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" relative  h-6 w-6 text-3xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative w-96  flex-col flex justify-center items-center">
              
              <img className='block mx-auto mb-2' src={img} alt="" />
             <div className='px-5'>
             <h1 className='my-2 font-bold text-center'>{title}</h1>
              <h1 className='text-gray-700 text-sm my-2'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis quas molestiae eius eveniet cupiditate! Accusantium ratione doloribus commodi excepturi.</h1>
             </div>
            

                </div>
                {/*footer*/}
                <div className="flex items-center justify-end ">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <NavLink to='/portfoliodetails'
                    className="bg-emerald-500  active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   More Details
                 
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
 

            </div>

          

    );
};

export default SinglePortfolio;