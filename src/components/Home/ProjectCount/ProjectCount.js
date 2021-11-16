import React from 'react';

const ProjectCount = () => {
    return (
        <div>
            <div className="bg-pink-900 p-28">
    <div className='md:flex'>
        <div className="md:w-6/12 text-white bg-pink-800 p-8 sm:rounded-tr-lg md:rounded-tr-none md:rounded-bl-lg rounded-tl-lg flex items-center">
            <div>
                <h1 className="text-4xl mb-5 font-bold">Lorem <span className="text-pink-300">ipsum</span> is simply dummy text.</h1>
                <h2 className="text-sm mb-12">Lorem Ipsum is simply dummy 
                    text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </h2>
                <div className="flex">
                    <div className="mr-8">
                        <p className="text-2xl font-bold">10k+</p>
                        <p className="text-sm">companies</p>
                    </div>
                    <div className="mr-8">
                        <p className="text-2xl font-bold">120+</p>
                        <p className="text-sm">teams</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">10k+</p>
                        <p className="text-sm">events</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="md:w-6/12 relative">
            <div className="bg-pink-500 w-full h-full opacity-60 absolute sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg"></div>
            <img className="h-full w-full object-cover sm:rounded-bl-lg md:rounded-bl-none md:rounded-tr-lg rounded-br-lg" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=550&q=80" alt="Banner Desktop"/>
        </div>
    </div>
</div>
        </div>
    );
};

export default ProjectCount;