import React from 'react';
import'./Footer.css'
import shape from "../../../../assets/Home/shape-bg2.png"


export default function Footer(props) {
  return (
    <div className='footer-container'>
      <div className='footer-parent'>
        <img src={shape} />
      </div>
    </div>
  );
}

