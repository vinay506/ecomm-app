import React, { useEffect } from "react";
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

  useEffect(()=>{
    dispatch(productList());
  },[]);
  return (<>
            <button onClick={onAddClick}>Add To Cart</button>
            <button onClick={onRemoveClick}>Remote From Cart</button>
            <button onClick={onEmptyClick}>Empty Cart</button>
             <div className="product-container">
                {data.map(item => <div key={item.name} className="product-item">
                    <h3>{item.name}</h3>
                    <img className="img" src={item.image} alt={item.name} />
                    <p>{item.price}</p>
                    <p>{item.color}</p>
                    <div>
                        <button onClick={()=>dispatch(addToCard(item))}>Add To Cart</button>
                        <button onClick={()=>dispatch(removeFromCard(item.name))}>Remove From Cart</button>
                    </div>
                  </div>  
                )}
             </div>
    </>
  )
  
};

export default Main;
