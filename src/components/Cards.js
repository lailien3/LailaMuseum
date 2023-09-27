import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>take a peak</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/catsicon.jpg'
              text='look at my cats'
              label='c a t s'
              path='/cats'
            />
            <CardItem
              src='images/articon.jpg'
              text='look at my art'
              label='a r t'
              path='/art'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/codeicon.jpg'
              text='look at my code'
              label='c o d e'
              path='/code'
            />
            <CardItem
              src='images/planticon.jpg'
              text='look at my plants'
              label='p l a n t s'
              path='/plants'
            />
            <CardItem
              src='images/gameicon.jpg'
              text='play my game'
              label='g a m e'
              path='/game'
            />
            <CardItem
              src='images/signupicon.jpg'
              text='sign-up'
              label='sign up'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;