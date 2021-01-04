import React, { useState } from 'react';
import SearchForm from '../components/SearchForm'
import CheeseList from '../components/CheeseList'
import BlogForm from '../components/Blog-Form'
import ColourScheme from '../components/colourScheme'
import DateSidebar from '../components/DateSidebar.js'
import { useGlobalContext } from '../context'




export default function Home() {
  const {cheeses} = useGlobalContext()

  var toggle=false
  var toggleColour=false
  const[toggleForm,setToggleForm]=useState(toggle)
    const[toggleColourPicker,setToggleColourPicker]=useState(toggleColour)

  function tog(){
    toggle=!toggle
    setToggleForm(toggle)
  }

  function togg(){
    toggleColour=!toggleColour
    setToggleColourPicker(toggleColour)
  }

  return (
    <main>

      <SearchForm />
      <br/>
      <br/>
      <button className='btn' style={{ display: "block",marginLeft:"auto",marginRight:"auto"}}
       onClick={tog}>Submit Post?</button>
    {toggleForm&&<BlogForm />}
    <br/>
    <br/>
    <button className='btn' style={{ display: "block",marginLeft:"auto",marginRight:"auto"}}
     onClick={togg}>Submit Colour Scheme?</button>
  {toggleColourPicker&&<ColourScheme />}
  <br/>
  <br/>
      {cheeses&&<CheeseList />}
    </main>
  )
}
