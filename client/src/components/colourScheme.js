import React, { useState } from 'react'

import Values from 'values.js'
import { useGlobalContext } from '../context'


function ColourScheme() {
  const {color,list,error,setColor,setList,setError } = useGlobalContext()


  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(15)
      console.log(`rgb(${colors[0]['rgb'][0]},${colors[0]['rgb'][1]},${colors[0]['rgb'][2]})`)
      setList(colors)
      document.documentElement.style.setProperty('--primaryLightColor', `rgb(${colors[0]['rgb'][0]},${colors[0]['rgb'][1]},${colors[0]['rgb'][2]})`);
      document.documentElement.style.setProperty('--primaryColor',`rgb(${colors[1]['rgb'][0]},${colors[1]['rgb'][1]},${colors[1]['rgb'][2]})`);
      document.documentElement.style.setProperty('--primaryDarkColor', `rgb(${colors[2]['rgb'][0]},${colors[2]['rgb'][1]},${colors[2]['rgb'][2]})`);
      document.documentElement.style.setProperty('--mainWhite',`rgb(${colors[3]['rgb'][0]},${colors[3]['rgb'][1]},${colors[3]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--offWhite', `rgb(${colors[4]['rgb'][0]},${colors[4]['rgb'][1]},${colors[4]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--mainBackground', `rgb(${colors[5]['rgb'][0]},${colors[5]['rgb'][1]},${colors[5]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--mainOverlay', `rgb(${colors[6]['rgb'][0]},${colors[6]['rgb'][1]},${colors[6]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--mainBlack', `rgb(${colors[7]['rgb'][0]},${colors[7]['rgb'][1]},${colors[7]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--mainGrey', `rgb(${colors[8]['rgb'][0]},${colors[8]['rgb'][1]},${colors[8]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--darkGrey', `rgb(${colors[9]['rgb'][0]},${colors[9]['rgb'][1]},${colors[9]['rgb'][2]})`);
      document.documentElement.root.style.setProperty('--mainRed', `rgb(${colors[10]['rgb'][0]},${colors[10]['rgb'][1]},${colors[10]['rgb'][2]})`);
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f15025'
            className={`${error ? 'error' : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>
      
    </>
  )
}

export default ColourScheme
