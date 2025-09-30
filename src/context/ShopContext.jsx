import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";


import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const navigate = useNavigate();


  const addToCard = async (itemId, size) => {

    if (!size) {
      toast.error("Select Product Size");
      return;
    }

    let cartData = structuredClone(cartItem);

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      }
      else {
        cartData[itemId][size] = 1;
      }
    }
    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItem(cartData);
  }




  const getCartCount = () => {
    let totalCount = 0 ;
    for(const items in cartItem){
      for(const item in cartItem[items]){
        try{
          if(cartItem[items][item] > 0)
            totalCount += cartItem[items][item];
        }catch(error){

        }
      }
    }
    return totalCount;
  }


  const updateQuantity = async (itemId,size,quantity) => {
      let cartData = structuredClone(cartItem);

      cartData[itemId][size] = quantity;
       
      setCartItem(cartData);
  } 


  const getCartAmount = () =>{
    let totalAmount = 0 ;
    for(const items in cartItem){
      let  itemInfo = products.find(( product)=> product._id === items);
      for(const item in cartItem[items]){
        try{
          if(cartItem[items][item] > 0){
            totalAmount += itemInfo.price * cartItem[items][item];
          }
        }catch(error){

        }
      }
    }
    return totalAmount;
  }



  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItem,
    addToCard,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };

  return (
    <ShopContext.Provider value={value}>
      {children}
      {/* ✅ Toast container should be rendered here, once */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ShopContext.Provider>
  );
};


export default ShopContextProvider;
