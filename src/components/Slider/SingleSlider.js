import React from 'react';
import './Slider.css'
const SingleSlider = ({img}) => {
	return (
		<div className="w-80 md:w-96  p-6 flex flex-col ">
						<div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
							<a href="#jh" className="flex flex-wrap no-underline hover:no-underline">
								<img src={img} className="h-64 w-full rounded-t pb-6" alt=''/>
								<p className="w-full text-gray-600 text-xs md:text-sm px-6">GETTING STARTED</p>
								<div className="w-full font-bold text-xl text-gray-900 px-6">Lorem ipsum dolor sit amet.</div>
								<p className="text-gray-800 font-serif text-base px-6 mb-5">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula. 
								</p>
							</a>
						</div>
						<div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
							<div className="flex items-center justify-between">
								<img className="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt=""/>
								<p className="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
							</div>
						</div>
					</div>
	);
};

export default SingleSlider;