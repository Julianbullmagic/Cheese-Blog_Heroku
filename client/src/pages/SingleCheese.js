import React, { useState } from 'react';

import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'


export default function SingleCheese() {

  const {cheeses}  = useGlobalContext()

  const { id } = useParams()

  const [currentCheese,setCurrentCheese]=useState(cheeses[id])





  if (!currentCheese) {
    return <h2 className='section-title'>no cheese to display</h2>
  } else {
    const {
      name,
      image,
      category,
      text,
      price
    } = currentCheese
    return (
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
          <h4><span className='drink-data'>price :</span>{price}</h4>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {text}
            </p>



          </div>
        </div>
      </section>
    )
  }
}
