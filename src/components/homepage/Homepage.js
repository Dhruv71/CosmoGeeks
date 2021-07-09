import React from 'react';
import CardList from '../cardlist/CardList';
import './homepage.css';


class HomePage extends React.Component{  
  
  render(){
    return(
          <div className="homepage">
             <div className="home-image">
               <div className="home-image-content" >
               <h1 className="home-image-text">Welcome to the Universe</h1> 
               <h2 className="home-image-text"> Join us to explore it.</h2>
               <button className="home-image-button" onClick = { () => this.props.history.push('/Signup') }>
                 Create Account
                </button>
               </div>  
             </div>
      
            <div className="home-middle">
               <div className="home-middle-content">
                    <div className="home-middle-content-header">For learners, by learners</div>
                    <div className="home-middle-content-line"></div>
                    <div className="home-middle-content-lower">Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit. Curabitur malesuada ullamcorper orci non aliquet.
                     Donec ipsum sem, placerat ac lobortis quis, fringilla a augue. Nunc sed arcu luctus,
                     imperdiet turpis non, scelerisque nunc.</div>
                  <CardList/>
                </div>
            </div>

                 <div className="home-end-content">
                     <div className="home-end-title">Join our Space <br/> Community Now.</div>
                     <div className="home-end-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur malesuada ullamcorper orci non aliquet. Donec ipsum sem, placerat ac lobortis quis, 
                      fringilla a augue. Nunc sed arcu luctus, imperdiet turpis non, scelerisque nunc.</div>
                 </div>
                <div className="home-end-image"></div>  
                   

                <div className='job-section'>
                    <div className='job-title'>Looking for a job?</div>
                    <div className="home-middle-content-line"></div>
                    <div className='job-description'>Browse jobs by technology  |  Browse jobs by salary  |  Browse jobs by visa sponsorship  |  Browse remote-friendly job</div>
                    <button className="job-button" onClick = { () => this.props.history.push('/jobs') }>
                      View jobs
                    </button>
                </div>

          </div>
    );
    };
};

export default HomePage;                                                                                                 