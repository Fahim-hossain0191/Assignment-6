import React from 'react';
import { MdDeleteForever } from "react-icons/md";
const SingleCart = ({ item,setCount}) => {
    let handleDelete=()=>{
           let targetId=item.id;
           setCount(prev => prev.filter(item => item.id !== targetId));
       
    }
  return (
    // <div className='w-10/12 mx-auto'>
      <div className='flex items-center gap-4  p-3 shadow-lg'>
        
        <div className='text-3xl'>
          {item.icon}
        </div>

        <div className='flex justify-between items-center w-full'>
            <div className='flex flex-col'>
                  <p className='font-medium text-3xl'>{item.name}</p>
          <p className='text-xl font-light'>${item.price}</p>
            </div>
         
          <div>
             <MdDeleteForever className='text-red-500' onClick={()=>handleDelete()}/>
          </div>
            
        </div>
        
      </div>
    // </div>
  );
};

export default SingleCart;