import React from 'react'
import Product from './Product'
 function ProductList(props) { 
  console.log(props);
  return (
    props.productList.length>0?
      props.productList.map((product,i)=> {
         return <Product product={product} key={i} incrementQ={props.incrementQ}  decrementQ={props.decrementQ} resetData={props.resetData}  removeItem={props.removeItem}index={i}/> 
       
      }
      )
      :<h1>No Products in Cart Please Add products</h1>
  )
}
export default ProductList;