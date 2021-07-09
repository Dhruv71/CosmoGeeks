import React from 'react';
import Card from './Card';
import { cardData } from './cardData';
import './cardlist.css';



const CardList = () => {
    return(
        <div className="card-list">
         {cardData.map( card => <Card mrg={card.mrg} key={card.id} svg={card.svg} title={card.title} description={card.description} />)}
        </div>
    );
};

export default CardList;