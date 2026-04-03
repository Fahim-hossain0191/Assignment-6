import React, { use, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';


const CardContainer = ({promise,count,setCount}) => {
    const data=use(promise);
    // console.log(data);
   
  
    return (
        <>
        
        <div className='grid md:grid-cols-3 grid-cols-1 w-10/12 mx-auto  mt-10 gap-10  place-items-center items-stretch'>
            {
                    data.map((user,index)=>
                        <SingleCard key={index} user={user} count={count} setCount={setCount}></SingleCard>
                    )
            }
            
        </div>
        </>
     
    );
};

export default CardContainer;