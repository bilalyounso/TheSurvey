import React from 'react';
import './PasswordResetForm.css';
import password from './password.svg';


const PasswordResetForm = () =>{
  return(
    <div>
      <div className="fillForm">
  			<form method="POST">
  				<div>
  					<input className="password" type="password" name="password" placeholder="new password" />
  					<img src={password} alt="lock_icon"/>
  				</div>
  				<div>
  					<input type="submit" name="submit" value="submit" />
  				</div>
  			</form>
  		</div>
    </div>
  )
}

export default PasswordResetForm;
