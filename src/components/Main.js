import React from "react";
import {addToCard, removeFromCard , emptyCard} from "./../redux/action"
import { useDispatch } from 'react-redux';
import { productList } from "../redux/productAction";
const Main = () => {
  const product = {
    name:"i phone",
    category:"mobile",
    price:"1000",
    color:"red"

  }
  const dispatch = useDispatch();
  const onAddClick = () => {
    dispatch(addToCard(product));
  };
    const onRemoveClick = () => {
    dispatch(removeFromCard(product.name));
  };
    const onEmptyClick = () => {
    dispatch(emptyCard());
  };
  return (<>
            <button onClick={onAddClick}>Add To Cart</button>
            <button onClick={onRemoveClick}>Remote From Cart</button>
            <button onClick={onEmptyClick}>Empty Cart</button>
             <button onClick={()=>{dispatch(productList())}}>Call product list</button>
    </>
  )
  
};

export default Main;
