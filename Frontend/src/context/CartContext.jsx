import {
createContext,
useContext,
useState,
} from "react";

import {
addToCart,
removeFromCart,
getCart,
}
from "../api/cartApi";

const CartContext =
createContext();

export const CartProvider =
({
children
})=>{

const [
cart,
setCart
]
=
useState([]);


// FETCH
const fetchCart =
async()=>{

try{

const data =
await getCart();

setCart(
data.cart||[]
);

}

catch(error){

console.log(error);

}

};


// ADD
const handleAdd =
async(
userId,
productId
)=>{

try{

await addToCart(
userId,
productId
);

await fetchCart();

}

catch(error){

console.log(error);

}

};


// REMOVE
const handleRemove =
async(
cartId
)=>{

try{

await removeFromCart(
cartId
);

await fetchCart();

}

catch(error){

console.log(error);

}

};


return(

<CartContext.Provider
value={{
cart,
fetchCart,
handleAdd,
handleRemove,
}}
>

{children}

</CartContext.Provider>

);

};


export const useCart =
()=>useContext(
CartContext
);