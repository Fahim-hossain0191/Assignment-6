import React, { useState } from 'react';
import Cart from '../../Cart/Cart';
import CardContainer from '../Cards/CardContainer/CardContainer';
import FetchCard from '../FetchCard/FetchCard';


const Container = ({count,setCount}) => {
 
const [cart, setCart] = useState(false);

    return (
        <>
           <div className='w-10/12 mx-auto pt-20'>
            <h1 className='text-4xl font-bold flex justify-center'>Premium Digital Tools</h1>
            <p className='text-sm font-light flex justify-center'>Choose from our curated collection of premium digital products designed  to boost your productivity and creativity.</p>
        </div>
<div className=' flex justify-center mt-5'>
       <div className='shadow-lg rounded-full inline-flex gap-2 px-3 py-2'>
          <button onClick={()=>setCart(false)}  className={`px-3 py-2 ${cart===false?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-3 rounded-full text-white cursor-pointer":"bg-transparent"}`}>Products</button>
        <button onClick={()=>setCart(true)} className={`px-3 py-2 ${cart===true?"bg-linear-to-r from-[#4F39F6] to-[#9514FA]  p-3 rounded-full text-white cursor-pointer":"bg-transparent"}`}>Cart ({count.length})</button>
        </div>
  
</div>
       {
        cart===true?<Cart count={count} setCount={setCount}></Cart>:<FetchCard count={count} setCount={setCount}></FetchCard>
       }
       
        </>
      
        
    );
};

export default Container;