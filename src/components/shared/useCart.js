import  { useState } from 'react';

const useCart = () => {

let [plus,setPlus]=useState(0)
const Increase =()=>{
plus=plus+1
setPlus(plus)
}
const Decrease =()=>{
if(plus>1){
    plus=plus-1
    setPlus(plus)
}
}

// let [cartProduct,setcardProduct]=useState()
// const AddProduct=()=>{
// cartProduct=cartProduct+1
// setcardProduct(cartProduct)

// }


    return {
        Increase,
        plus,
        Decrease,
     
    
    }
};

export default useCart;