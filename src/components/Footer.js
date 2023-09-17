import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer-container'>
       <div class="social-icon-link">
          <div>
          <i class='fa fa-user footer-icon'/>
          Alan Harris | Digital Artist
          </div>
          <div>
          <i class='fa fa-location-pin footer-icon'/>
          Ottawa, ON
          </div>
          <div>
          <i class='fa fa-envelope footer-icon'/>
          alannharris25@gmail.com
          </div>
      </div>
      <img src = "../images/Signature2.png" class = "signature"></img>
      <div class='website-rights'>
        <small > Alan Harris © 2022 </small>
      </div>
      
    </div>
  );
}