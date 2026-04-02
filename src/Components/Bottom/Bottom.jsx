import React from 'react';

const Bottom = () => {
    return (
        <>
                <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]   mt-20 space-y-5 p-20'>
                <h1 className='text-white text-4xl font-bold text-center'>Ready to Transform Your Workflow?</h1>
                <p className='text-sm font-extralight text-center text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex items-center justify-center gap-2'> 
                     <button className="btn btn-primary btn-outline rounded-full bg-white text-xl font-medium  p-7">Explore Products</button>
                    <button className='bg-transparent border border-white  p-3 rounded-full text-white text-xl font-medium'>
                         View Pricing
                    </button>
                </div>
                <small  className="inline-block w-full text-center text-white">14-day free trial • No credit card required • Cancel anytime</small>
        </div>
        </>
       
    );
};

export default Bottom;