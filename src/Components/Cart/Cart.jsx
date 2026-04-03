import React from "react";
import SingleCart from "./SingleCart";
import { toast } from "react-toastify";
import { BsCart4 } from "react-icons/bs";
// const [cardCount,setCardCount]=useState("");
const Cart = ({ count, setCount }) => {
  let Total = 0;
  count.forEach((item) => {
    Total += item.price;
  });
  return (
    <div className=" w-10/12 mx-auto shadow-lg p-5 space-y-3 my-10 bg-gray-100">
      <h2 className="text-3xl font-bold">Your Cart</h2>
      {count.length === 0 ? (
        <div className="grid items-center justify-center m-20">
            <BsCart4 className="text-8xl ml-10" /> 
        <p className="text-2xl">No card available</p>
        </div>
        
      
        
      ) : (
        count.map((item, index) => (
          <SingleCart key={index} item={item} setCount={setCount} ></SingleCart>
        ))
      )}

      {count.length === 0 ? (
        " "
      ) : (
        <div>
        <div className="flex justify-between">
          <p className="text-xl font-medium">Total</p>
          <p className="text-xl">$ {Total}</p> 
        </div>
              <button onClick={()=>{setCount([]),toast.error("All the card removed")}} className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full py-2">Proceed to Checkout</button>
        </div>
      )}
      
      
         
    </div>
  );
};

export default Cart;
