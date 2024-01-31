import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>take a peak ...</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/catsicon.jpg'
              text='... at my cats'
              path='/cats'
            />
            <CardItem
              src='images/articon.jpg'
              text='... at my art'
              path='/art'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/codeicon.jpg'
              text='... at my code'
              path='/code'
            />
            <CardItem
              src='images/planticon.jpg'
              text='... at my plants'
              path='/plants'
            />
            <CardItem
              src='images/planticon.jpg'
              text='... at my crystals'
              path='/crystals'
            />
            <CardItem
              src='images/gameicon.jpg'
              text='... at my game'
              path='/game'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;