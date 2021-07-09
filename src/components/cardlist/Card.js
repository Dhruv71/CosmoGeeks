import React from 'react';
import './card.css';

const Card = ({svg, title, description, mrg}) => {
    return(
      <div className={`card-item ${mrg}`}>
         <div className="card-item-logo">
           {svg}
        </div>
        
         <div className="card-item-title">{title}</div>
         <div className="card-item-description">{description}</div> 
      </div>

    );
};

export default Card;