import React, { useState } from 'react';
import Cart from '../../../Cart/Cart';
import { IoCheckmark } from "react-icons/io5";
import { toast } from 'react-toastify';

// {
//     "id": 1,
//     "name": "Starter Resume Builder",
//     "description": "Create professional resumes with basic templates.",
//     "price": 0,
//     "period": "one-time",
//     "tag": "new",
//     "tagType": "info",
//     "features": ["10+ templates", "Basic customization", "Download PDF"],
//     "icon": "📄"
//   },

const SingleCard = ({user,count,setCount}) => {

//  const [buttonState,setButtonState]=useState(false);
   const handleCart = () => {
  const isAdded = count.find(item => item.id === user.id);

  if (isAdded) {
    return;
  }

  setCount([...count, user]);
  toast.success("Cart is added!");
};
   const isAdded = count.some(item => item.id === user.id); 
    const feature=user.features;
    return (
  <div className="card w-96 bg-base-100 shadow-lg ">
  <div className="card-body">
        
       <div className='flex justify-between items-center'>
        <div className='text-2xl'>{user.icon}</div>   
        <span className={` ${user.tag=="new"?"bg-green-100 text-green-600 p-2 rounded-full font-bold":""} ${user.tag=="popular"?"bg-purple-100 text-purple-600 p-2 rounded-full font-bold":""} ${user.tag=="best seller"?"bg-amber-100 text-amber-600 p-2 rounded-full font-bold":""}`}>
          {user.tag}
        </span>
       </div>
      <h2 className="text-3xl font-bold">{user.name}</h2>
      <p>{user.description}</p>
      <span className='text-3xl font-bold flex items-center'>${user.price}
        <p className='font-light text-2xl'>
                     /${user.period}
        </p>
        

      </span>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
         {
          feature.map((item,index)=><li key={index} className='text-xl'>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span key={index}>{item}</span>
      </li>)
         }
     

      
    </ul>
    <div className="mt-6 ">
<button
  onClick={()=>{
    handleCart()}}
  disabled={isAdded}
  className={`btn text-white rounded-full w-full ${
    isAdded
      ? "bg-green-400 cursor-not-allowed"
      : "bg-linear-to-r from-[#4F39F6] to-[#9514FA]"
  }`}
>
  {isAdded ? (
    <span className="flex items-center justify-center gap-2">
      <IoCheckmark />
      Added to cart
    </span>
  ) : (
    "Buy now"
  )}
</button>
    </div>
  </div>
   </div>
    );
};

export default SingleCard;