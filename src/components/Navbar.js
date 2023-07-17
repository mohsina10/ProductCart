import React from 'react';  

export default function Navbar(props){
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> 
       
          <a className="navbar-brand " href="#">
            AppCart
          </a>  
          <span class="badge bg-secondary"><h2 className=' text-white' >{props.totalSize}</h2></span>
        
          
        </nav>
      </div>
    );
  }



