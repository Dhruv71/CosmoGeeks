import React from 'react';
import './footer.css';

const Footer = () => {
    return(
      <div className="footer">
        <div className="footer-content">
           <div className="footer-logo">
           CosmoGeeks
           </div>
        
        <div className="footer-icon-container">
          
           <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26.7 26.7">
            <path id="Path_1" data-name="Path 1" d="M31.4,30.9H31.4V21.1c0-4.79-1.031-8.481-6.632-8.481A5.814,5.814,0,0,0,19.536,15.5h-.078V13.071h-5.31V30.9h5.529V22.07c0-2.324.441-4.571,3.319-4.571,2.836,0,2.878,2.652,2.878,4.72V30.9Z" transform="translate(-4.704 -4.197)" fill="#fff"/>
            <path id="Path_2" data-name="Path 2" d="M.66,13.295H6.2V31.121H.66Z" transform="translate(-0.219 -4.421)" fill="#fff"/>
            <path id="Path_3" data-name="Path 3" d="M3.206,0A3.221,3.221,0,1,0,6.412,3.206,3.207,3.207,0,0,0,3.206,0Z" fill="#fff"/>
          </svg>
       
          <svg id="twitter" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 26.446 21.488">
          <g id="Group_3" data-name="Group 3" transform="translate(0 0)">
          <path id="Path_4" data-name="Path 4" d="M26.446,6.294a11.3,11.3,0,0,1-3.124.856,5.391,5.391,0,0,0,2.385-3A10.835,10.835,0,0,1,22.27,5.466a5.421,5.421,0,0,0-9.379,3.707,5.583,5.583,0,0,0,.126,1.236A15.346,15.346,0,0,1,1.841,4.738a5.423,5.423,0,0,0,1.666,7.246,5.354,5.354,0,0,1-2.45-.668v.06A5.447,5.447,0,0,0,5.4,16.7a5.411,5.411,0,0,1-1.421.179,4.794,4.794,0,0,1-1.026-.093A5.473,5.473,0,0,0,8.02,20.567,10.894,10.894,0,0,1,1.3,22.879,10.155,10.155,0,0,1,0,22.8a15.264,15.264,0,0,0,8.317,2.433A15.325,15.325,0,0,0,23.749,9.81c0-.24-.008-.471-.02-.7A10.816,10.816,0,0,0,26.446,6.294Z" transform="translate(0 -3.75)" fill="#fff"/>
          </g>
          </svg>

          <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 23.014 23.014">
              <g id="Group_5" data-name="Group 5">
                <g id="Group_4" data-name="Group 4">
                  <path id="Path_5" data-name="Path 5" d="M15.822,0H7.192A7.193,7.193,0,0,0,0,7.192v8.63a7.193,7.193,0,0,0,7.192,7.192h8.63a7.193,7.193,0,0,0,7.192-7.192V7.192A7.193,7.193,0,0,0,15.822,0Zm5.034,15.822a5.04,5.04,0,0,1-5.034,5.034H7.192a5.04,5.04,0,0,1-5.034-5.034V7.192A5.04,5.04,0,0,1,7.192,2.158h8.63a5.04,5.04,0,0,1,5.034,5.034Z" fill="#fff"/>
                </g>
              </g>
              <g id="Group_7" data-name="Group 7" transform="translate(5.753 5.753)">
                <g id="Group_6" data-name="Group 6">
                  <path id="Path_6" data-name="Path 6" d="M15.753,10a5.753,5.753,0,1,0,5.753,5.753A5.754,5.754,0,0,0,15.753,10Zm0,9.349a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,15.753,19.349Z" transform="translate(-10 -10)" fill="#fff"/>
                </g>
              </g>
              <g id="Group_9" data-name="Group 9" transform="translate(16.925 4.555)">
                <g id="Group_8" data-name="Group 8">
                  <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="0.767" cy="0.767" rx="0.767" ry="0.767" fill="#fff"/>
                </g>
              </g>
            </svg>

          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20.999 20.999">
              <path id="facebook" d="M19.84,0H1.158A1.159,1.159,0,0,0,0,1.159V19.841A1.159,1.159,0,0,0,1.159,21H11.217V12.878H8.49V9.7h2.727V7.361a3.818,3.818,0,0,1,4.076-4.189,22.439,22.439,0,0,1,2.445.125V6.132H16.07c-1.317,0-1.571.626-1.571,1.544V9.7h3.148l-.41,3.179H14.5V21H19.84A1.159,1.159,0,0,0,21,19.84h0V1.158A1.159,1.159,0,0,0,19.84,0Zm0,0" fill="#fff"/>
          </svg>

        </div>

             <div className="footer-quick-link">
               <h3 >Quick Links</h3>
               <div className="footer-quick-link-list">
                 <div className="grid_option">About us</div>
                 <div className="grid_option">Contact</div>
                 <div className="grid_option">Activity</div>
                 <div className="grid_option">Blog</div>
                 <div className="grid_option">Career</div>
                 <div className="grid_option">FAQ</div>   
              </div> 
           </div>
        </div>
      </div>
    );
};

export default Footer;