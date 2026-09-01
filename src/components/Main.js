import React from "react";
import {addToCard, removeFromCard , emptyCard} from "./../redux/action"
import { useDispatch,useSelector } from 'react-redux';
import { productList } from "../redux/productAction";
const Main = () => {
  const product = {
    name:"i phone",
    category:"mobile",
    price:"1000",
    color:"red"

  }
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
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
             <div className="product-container">
                {data.map(item => <div key={item.name} className="product-item">
                    <h3>{item.name}</h3>
                    <img className="img" src={item.image} alt={item.name} />
                    <p>{item.price}</p>
                    <p>{item.color}</p>
                  </div>  
                )}
             </div>
    </>
  )
  
};

export default Main;
