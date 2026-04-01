import React from 'react';

const Container = () => {
    return (
        <>
           <div className='w-10/12 mx-auto pt-20'>
            <h1 className='text-4xl font-bold flex justify-center'>Premium Digital Tools</h1>
            <p className='text-sm font-light flex justify-center'>Choose from our curated collection of premium digital products designed  to boost your productivity and creativity.</p>
        </div>
<div className=' flex justify-center mt-5'>
       <div className='border rounded-full inline-flex gap-2'>
          <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-3 rounded-full text-white'>Products</button>
          <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-3 rounded-full text-white'>Cart (2)</button>
        </div>
</div>
       
        </>
      
        
    );
};

export default Container;