import React from 'react'

import { useGlobalContext } from '../context'

const DateSidebar= () => {


  const {cheeses} = useGlobalContext()

  const dates=cheeses.map((item) => {
      var itemToSplit=item['date']
  return itemToSplit
  })
var dateSet=new Set(dates)

var cheese=Array.from(dateSet)
console.log(cheese)
const dateMap=cheese.map((item) => {
return <h5>{item}</h5>
})

    return (
      <aside className='sidebar show-sidebar'>
        <div className='sidebar-header'>
        <ul className='links'>
        {dateMap}
        </ul>
        </div>
        </aside>


    );
  };

  export default DateSidebar;
