import React, {useRef} from 'react'
import { useGlobalContext } from '../context'
export default function BlogForm() {
  const {cheeses, setCheeses, setAddCheese, searching, setSearching} = useGlobalContext()
  const titleValue = React.useRef('')
const imgValue = React.useRef('')
const textValue = React.useRef('')
const categoryValue = React.useRef('')
const priceValue = React.useRef('')


   function handleSubmit(e) {
     var day=new Date().getDate()
     var month=new Date().getMonth()
     var year=new Date().getFullYear()
       const newPost={
         name: titleValue.current.value,
         category:categoryValue.current.value,
         image:imgValue.current.value,
         text:textValue.current.value,
         date:`${day},${month},${year}`,
         price:priceValue.current.value,
       }
       console.log(newPost)
setSearching(true)

         fetch("http://localhost:5000/posts/add", {
             method: "POST",
             body: JSON.stringify(newPost),
             headers: {
                 "Content-type": "application/json; charset=UTF-8"}})
                 .then(response => response.json()).then(json => console.log(json));


   }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
        <label htmlFor='name'>Title</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={titleValue}

        />
        <label htmlFor='name'>Category</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={categoryValue}

        />
        <label htmlFor='name'>Image</label>
        <input
          type='text'
          name='name'
          id='name'
          ref={imgValue}

        />
          <label htmlFor='name'>Price</label>
        <input
          type='text'
          name='price'
          id='price'
          ref={priceValue}
        />
          <label htmlFor='name'>Text</label>

          <textarea ref={textValue} id="name" name="name" rows="20" cols="70">
</textarea>

          <input type="submit" value="Submit" />
        </div>
      </form>
    </section>
  )
}
