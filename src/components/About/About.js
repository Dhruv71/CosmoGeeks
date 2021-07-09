import React from 'react'
import DP from './pic/dhruv.webp';
import KP from './pic/kaval.webp';
import './about.css'

const About = () => {
    return (
        <div className="about">
            
               <div className="credits">
               <div className="dhruv-part">
                    <img className="credit-photo-dhruv" src={DP} alt="profile pic" width="150px"/>
                    <h1 className="cname"> Dhruv Patel </h1>
                    <h2 className="cwork"> Full-stack Developer | MERN STACK </h2>
                    <div className="social-links">
                        
                    <a href="https://www.linkedin.com/in/dhruv-full-stack-dev/" target="_blank" rel="noreferrer">
                        <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26.7 26.7">
                            <path id="Path_1" data-name="Path 1" d="M31.4,30.9H31.4V21.1c0-4.79-1.031-8.481-6.632-8.481A5.814,5.814,0,0,0,19.536,15.5h-.078V13.071h-5.31V30.9h5.529V22.07c0-2.324.441-4.571,3.319-4.571,2.836,0,2.878,2.652,2.878,4.72V30.9Z" transform="translate(-4.704 -4.197)" fill="#000"/>
                            <path id="Path_2" data-name="Path 2" d="M.66,13.295H6.2V31.121H.66Z" transform="translate(-0.219 -4.421)" fill="#000"/>
                            <path id="Path_3" data-name="Path 3" d="M3.206,0A3.221,3.221,0,1,0,6.412,3.206,3.207,3.207,0,0,0,3.206,0Z" fill="#000"/>
                        </svg>
                        </a>

                        <a id="github" href="https://github.com/Dhruv71" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                        

                        <a href="https://www.instagram.com/dhruvpatel648/" target="_blank" rel="noreferrer">
                        <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 23.014 23.014">
                        <g id="Group_5" data-name="Group 5">
                            <g id="Group_4" data-name="Group 4">
                            <path id="Path_5" data-name="Path 5" d="M15.822,0H7.192A7.193,7.193,0,0,0,0,7.192v8.63a7.193,7.193,0,0,0,7.192,7.192h8.63a7.193,7.193,0,0,0,7.192-7.192V7.192A7.193,7.193,0,0,0,15.822,0Zm5.034,15.822a5.04,5.04,0,0,1-5.034,5.034H7.192a5.04,5.04,0,0,1-5.034-5.034V7.192A5.04,5.04,0,0,1,7.192,2.158h8.63a5.04,5.04,0,0,1,5.034,5.034Z" fill="#000"/>
                            </g>
                        </g>
                        <g id="Group_7" data-name="Group 7" transform="translate(5.753 5.753)">
                            <g id="Group_6" data-name="Group 6">
                            <path id="Path_6" data-name="Path 6" d="M15.753,10a5.753,5.753,0,1,0,5.753,5.753A5.754,5.754,0,0,0,15.753,10Zm0,9.349a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,15.753,19.349Z" transform="translate(-10 -10)" fill="#000"/>
                            </g>
                        </g>
                        <g id="Group_9" data-name="Group 9" transform="translate(16.925 4.555)">
                            <g id="Group_8" data-name="Group 8">
                            <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="0.767" cy="0.767" rx="0.767" ry="0.767" fill="#000"/>
                            </g>
                        </g>
                        </svg>
                        </a>
           
                    </div>
               </div>

               <div className="kaval-part">
                    <img className="credit-photo-kaval" src={KP} alt="profile pic" width="150px"/>
                    <h1 className="cname"> Kaval Patel </h1>
                    <h2 className="cwork">Product Designer</h2>
                    <div className="social-links">
                        
                        <a href="https://in.linkedin.com/in/kavalpatel18" target="_blank" rel="noreferrer">
                        <svg id="linkedin" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 26.7 26.7">
                            <path id="Path_1" data-name="Path 1" d="M31.4,30.9H31.4V21.1c0-4.79-1.031-8.481-6.632-8.481A5.814,5.814,0,0,0,19.536,15.5h-.078V13.071h-5.31V30.9h5.529V22.07c0-2.324.441-4.571,3.319-4.571,2.836,0,2.878,2.652,2.878,4.72V30.9Z" transform="translate(-4.704 -4.197)" fill="#000"/>
                            <path id="Path_2" data-name="Path 2" d="M.66,13.295H6.2V31.121H.66Z" transform="translate(-0.219 -4.421)" fill="#000"/>
                            <path id="Path_3" data-name="Path 3" d="M3.206,0A3.221,3.221,0,1,0,6.412,3.206,3.207,3.207,0,0,0,3.206,0Z" fill="#000"/>
                        </svg>
                        </a>

                        <a href="https://github.com/kaval1810" target="_blank" rel="noreferrer">
                        <svg id="github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>


                        <a href="https://www.instagram.com/k_square_studio/" target="_blank" rel="noreferrer">
                        <svg id="instagram" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 23.014 23.014">
                        <g id="Group_5" data-name="Group 5">
                            <g id="Group_4" data-name="Group 4">
                            <path id="Path_5" data-name="Path 5" d="M15.822,0H7.192A7.193,7.193,0,0,0,0,7.192v8.63a7.193,7.193,0,0,0,7.192,7.192h8.63a7.193,7.193,0,0,0,7.192-7.192V7.192A7.193,7.193,0,0,0,15.822,0Zm5.034,15.822a5.04,5.04,0,0,1-5.034,5.034H7.192a5.04,5.04,0,0,1-5.034-5.034V7.192A5.04,5.04,0,0,1,7.192,2.158h8.63a5.04,5.04,0,0,1,5.034,5.034Z" fill="#000"/>
                            </g>
                        </g>
                        <g id="Group_7" data-name="Group 7" transform="translate(5.753 5.753)">
                            <g id="Group_6" data-name="Group 6">
                            <path id="Path_6" data-name="Path 6" d="M15.753,10a5.753,5.753,0,1,0,5.753,5.753A5.754,5.754,0,0,0,15.753,10Zm0,9.349a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,15.753,19.349Z" transform="translate(-10 -10)" fill="#000"/>
                            </g>
                        </g>
                        <g id="Group_9" data-name="Group 9" transform="translate(16.925 4.555)">
                            <g id="Group_8" data-name="Group 8">
                            <ellipse id="Ellipse_5" data-name="Ellipse 5" cx="0.767" cy="0.767" rx="0.767" ry="0.767" fill="#000"/>
                            </g>
                        </g>
                        </svg>
                        </a>

                    </div>
               </div>

               </div>
           </div> 
    )
}

export default About;