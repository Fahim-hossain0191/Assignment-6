import React from 'react';
import {Suspense} from 'react'
import Container from '../Container/Container';
import CardContainer from '../Cards/CardContainer/CardContainer';
const FetchCard = ({count,setCount}) => {
     const fetchPlayer=async()=>{
  const res=await fetch("/data.json");
  return res.json();
}
const promise=fetchPlayer();  

    return (
        <div>
             
      <Suspense fallback={
        <div className='flex justify-center h-[200px]'> 
                 <span className="loading loading-spinner loading-lg "></span>
        </div>
       
        }>
                 <CardContainer count={count} setCount={setCount} promise={promise}></CardContainer>
      </Suspense> 
        </div>
    );
};

export default FetchCard;