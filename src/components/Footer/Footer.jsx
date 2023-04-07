import React from 'react';
const earth = require ('../../assets/earth.png');
const insta = require ('../../assets/insta.png');
const facebook = require ('../../assets/facebook.png');
const youtube = require ('../../assets/youtube.png');

const Footer = () =>{
    return(
      
           <nav>
            <div className='earth'>
          <img src={earth} alt="Earth" />
            </div>
            <div className='insta'>
          <img src={insta} alt="Insta" />
            </div>
            <div className='facebook'>
          <img src={facebook} alt="Facebook" />
            </div>
            <div className='youtube'>
          <img src={youtube} alt="Youtube" />
            </div>
           
           </nav>
      
    )
}

export default Footer