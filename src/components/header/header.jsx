import React from 'react';
import './header.css';
import MountainImg from './mountains-1412683.png';

function header() {
  return (
    <div className="header">
        <div className='headertitle'>
           <span className='headertitlenameS'>Mountains</span>
           <span className="headertitlenameB">Blog</span>

        </div>
        <img className="headerImg" src={MountainImg} alt="mountains"></img>
        

    </div>
  )
}

export default header