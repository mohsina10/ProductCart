import React from "react";
import { PropTypes } from 'react'
export default function Product(props) {
  console.log(props); 
  
  return ( 

    <div className="row mb-5">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span class="badge bg-secondary">${props.product.price}</span>
        </h2>
      </div>
      <div className="col-3">
        <>
          <button type="button" className="btn btn-danger" onClick={() =>{props.decrementQ (props.index);}} >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button type="button" className="btn btn-success" onClick={() =>{props.incrementQ(props.index);}}>
            +
          </button>
        </>
      </div> 
      <div className="col-2">
        {props.product.quantity*props.product.price}
      </div> 
      <button className="col-2 btn btn-danger" onClick={() =>{props.removeItem (props.index)}}>
        Remove
      </button>
    </div>
  );
}
