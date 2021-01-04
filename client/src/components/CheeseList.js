import React from 'react'
import Cheese from './Cheese'
import { useGlobalContext } from '../context'



export default function CheeseList() {

  const {cheeses}  = useGlobalContext()
  console.log(cheeses)
  const cheeseMap=cheeses.map((item) => {

  return <Cheese key={item.id}{...item} />
  })

  return (
    <section className='section'>
      <h2 className='section-title'>Cheeses</h2>
      <div className='cocktails-center'>
        {cheeseMap}
      </div>
    </section>
  )
}
