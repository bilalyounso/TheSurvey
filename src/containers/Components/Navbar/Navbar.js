import React from 'react';
import logo from './logo.svg';
import './Navbar.css';


const Navbar = () =>{
  return(
    <div>
      <div className="navbar">
    		<div className="logoWithText">
    			<div className="logo">
    				<img src={logo} alt="Logo of The Survey"/>
    			</div>
    			<div className="text">
    				<span className="survey">The Survey</span>
    			</div>
    		</div>
    	</div>
    </div>
  )
}

export default Navbar;
