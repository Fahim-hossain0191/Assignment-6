import React, { use } from 'react';
import SingleCard from '../SingleCard/SingleCard';


const CardContainer = ({promise}) => {
    const data=use(promise);
    console.log(data);
   
    
    return (
        <>
        
        <div className='grid grid-cols-3 w-10/12 mx-auto  mt-10 gap-10  place-items-center items-stretch'>
            {
                    data.map((user,index)=>
                        <SingleCard key={index} user={user}></SingleCard>
                    )
            }
            
        </div>
        </>
     
    );
};

export default CardContainer;