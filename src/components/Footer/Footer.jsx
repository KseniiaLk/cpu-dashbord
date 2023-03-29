import React from 'react';
import * as S from './styled';
const earth = require ('../../assets/earth.png');
const insta = require ('../../assets/insta.png');
const facebook = require ('../../assets/facebook.png');
const youtube = require ('../../assets/youtube.png');

const Footer = () =>{
    return(
        <S.Container>
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
        </S.Container>
    )
}

export default Footer