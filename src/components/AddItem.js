// import React from "react"; 
import React, { Component } from 'react'
class AddItem extends Component {
  // state = {}; 
  constructor(props){
    super(props); 
    this.state={
       productName:"", 
       productPrice:0,
    };
  }
  render() {
    return (
      <div>
        <form className='row mb-5' onSubmit={(e) =>{
          e.preventDefault(); 
          this.props.addItem(this.state.productName,Number(this.state.productPrice));
        }}>
          <div className="form-group col-4">
            <label htmlFor="inputname">Name</label>
            <input
              type="text"
              className="form-control"
              id="inputname"
              aria-describedby="name"
              placeholder="Enter Product name" 
              name="productName" 
              onChange={(e) => {
                this.setState({productName:e.currentTarget.value})
              }} 
              value={this.state.productName}
            />
          </div>
          <div className="form-group col-4">
            <label htmlFor="inputprice">Price</label>
            <input
              type="number"
              className="form-control"
              id="inputprice"
              placeholder="Price" 
              name="productPrice" 
              onChange={(e) => {
                this.setState({productPrice:e.currentTarget.value})
              }} 
              value={this.state.productPrice}
            />
          </div>
          <button type="submit" className="btn btn-primary col-3 height:5px" 
           >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddItem;
