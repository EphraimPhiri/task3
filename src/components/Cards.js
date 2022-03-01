import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Available books</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/Screenshot (52).png'
              text='Introduction java programming and data structures'
              label='Computer Science'
              path='/about'
            />
            <CardItem
              src='images/Screenshot (53).png'
              text='Coding Theory'
              label='Computer Science'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/Screenshot (54).png'
              text='Learning Web design'
              label='Computer Science'
              path='/books'
            />
            <CardItem
              src='images/Screenshot (55).png'
              text='Illustrated guide to python 3'
              label='Computer Programming'
              path='/books'
            />
            <CardItem
              src='images/Screenshot (56).png'
              text='How to analyse people'
              label='Psychology'
              path='/books'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
