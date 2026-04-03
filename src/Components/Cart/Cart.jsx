import React from "react";
import SingleCart from "./SingleCart";
// const [cardCount,setCardCount]=useState("");
const Cart = ({ count, setCount }) => {
  let Total = 0;
  count.forEach((item) => {
    Total += item.price;
  });
  return (
    <div className=" w-10/12 mx-auto shadow-lg p-5 space-y-3 my-10">
      <h2 className="text-3xl font-bold">Your Cart</h2>
      {count.length === 0 ? (
        <p className="text-2xl">No card available</p>
      ) : (
        count.map((item, index) => (
          <SingleCart key={index} item={item} setCount={setCount} ></SingleCart>
        ))
      )}

      {count.length === 0 ? (
        " "
      ) : (
        <div className="flex justify-between">
          <p className="text-xl font-medium">Total</p>
          <p className="text-xl">$ {Total}</p>
          
        </div>
      )}
      
            <button className="btn text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-full py-2">Proceed to Checkout</button>
         
    </div>
  );
};

export default Cart;
