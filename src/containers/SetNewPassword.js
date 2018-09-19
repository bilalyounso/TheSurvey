import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import PasswordResetForm from './Components/PasswordResetForm/PasswordResetForm';

const SetNewPassword = () =>{
  return(
    <div>
      <Navbar />
      <PasswordResetForm/>
      <Footer />
    </div>
  )
}

export default SetNewPassword;
