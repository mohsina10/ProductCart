import React,{useState} from "react";
import './App.css';
import Navbar from './components/Navbar'; 
import ProductList from './components/ProductList'; 
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
function App() { 
  const products=[
    {
      price:999, 
      name:"IPhone 105 Max", 
      quantity:0,
    }, 
    {
      price:995, 
      name:"Redmi 105 Max", 
      quantity:0,
    }, 
    {
      price:997, 
      name:"MI 105 Max", 
      quantity:0,
    },
  ] 
   let [ productList, setProductList]=useState(products);  
   let [totalAmount,setTotalAmount]=useState(0); 
   let [totalSize,setTotalSize]=useState(0); 
  const incrementQ =(index) =>
   {
    let newProductList =[...productList]; //used for copy of productList into newproductList
    let newTotalAmount=totalAmount; 
    let newTotalSize=totalSize;
    newProductList[index].quantity++; 
    // newTotalSize+=newProductList[index].quantity; 
    newTotalSize++;
    newTotalAmount +=newProductList[index].price; 
    setTotalAmount(newTotalAmount);
    setProductList(newProductList); 
    setTotalSize(newTotalSize);
   }; 
   const decrementQ =(index) =>
   {
    let newProductList =[...productList]; //used for copy of productList into newproductList
    let newTotalAmount=totalAmount; 
    let newTotalSize=totalSize;
    if(newProductList[index].quantity>0)
    {
      newProductList[index].quantity-- ;   
      newTotalAmount-=newProductList[index].price; 
      newTotalSize--;
      
    } 
    // newTotalSize-=newProductList[index].quantity;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList); 
    setTotalSize(newTotalSize);
   }; 
   const resetData=(index)=>{
    let newProductList =[...productList];  
    newProductList.map((products) => {
      products.quantity=0;
    })
    setProductList(newProductList); 
    setTotalAmount(0); 
    setTotalSize(0);
   } 
   const removeItem =(index) =>{
    let newProductList =[...productList];  
    let newTotalAmount=totalAmount;  
    let newTotalSize=totalSize;
    newTotalSize-=newProductList[index].quantity;
    newTotalAmount-=newProductList[index].quantity * newProductList[index].price
    newProductList.splice(index,1); 
    setProductList(newProductList);  
    setTotalAmount(newTotalAmount); 
    setTotalSize(newTotalSize);
   }; 
   const addItem=(name,price) =>{
    let newProductList =[...productList];  
    newProductList.push({
      price:price, 
      name:name, 
      quantity:0
    }) 
    setProductList(newProductList); 
   } 

  return ( 
    <> 
    <Navbar totalSize={totalSize}/>  
    <AddItem addItem={addItem} />
    <div className='Container mt-5'>
    <ProductList productList={productList} incrementQ={incrementQ} decrementQ={decrementQ} resetData={resetData} removeItem={removeItem}
    />  
    <Footer totalAmount={totalAmount}  resetData={resetData} />
    </div>
     </>
  )
}

export default App;
