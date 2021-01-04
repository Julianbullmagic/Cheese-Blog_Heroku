import React, {useRef} from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { setSearchTerm, setSearching } = useGlobalContext()
  const searchValue = React.useRef('')




   function handleSubmit(e) {
     console.log(e)
     setSearching(true)
     setSearchTerm(searchValue.current.value)
     e.preventDefault()
   }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cheese</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
          />
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </section>
  )
}
