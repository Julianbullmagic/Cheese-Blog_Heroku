import React, { useState, useContext, useEffect, useCallback, useReducer } from 'react'
import reducer from './reducer'
import Values from 'values.js'
import data from './data';
import cartItems from './data2';
const AppContext = React.createContext()
var posties
fetchCheese()
  async function fetchCheese(){
     try {
       const response = await fetch('https://cheese-blog.herokuapp.com/posts/')
       const data = await response.json()

       const {posts} = data
       console.log("posts")
       console.log(posts)
       posties=posts

         console.log(posties)}
         catch (error) {
console.log(error)
     }}

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {





    const [state, dispatch] = useReducer(reducer, initialState)

    const clearCart = () => {
      dispatch({ type: 'CLEAR_CART' })
    }
    const remove = (id) => {
      dispatch({ type: 'REMOVE', payload: id })
    }
    const increase = (id) => {
      dispatch({ type: 'INCREASE', payload: id })
    }
    const decrease = (id) => {
      dispatch({ type: 'DECREASE', payload: id })
    }
    const fetchData = async () => {
      dispatch({ type: 'LOADING' })
      const response = await fetch('https://course-api.com/react-useReducer-cart-project')
      const cart = await response.json()
      dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
    }
    const toggleAmount = (id, type) => {
      dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } })
    }
    useEffect(() => {
      fetchData()
    }, [])

    useEffect(() => {
      dispatch({ type: 'GET_TOTALS' })
    }, [state.cart])





  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [cheeses, setCheeses]=useState([])
  const [backupCheeses, setBackupCheeses]=useState([])
  const[searching,setSearching]=useState(false)
  const[thing,setThing]=useState(false)
  const[addCheese,setAddCheese]=useState(false)
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#f15025').all(15))



 useEffect(() => {

   fetch("https://cheese-blog.herokuapp.com/posts/")
   .then(response => response.json()).then(json =>{
     setCheeses(json);
   setBackupCheeses(json);})


},[])




 useEffect(() => {
   var filteredCheese
     var data=JSON.parse(JSON.stringify(backupCheeses))
   if(searching===true && searchTerm!==''){
     filteredCheese=data.filter(item=> item.name.toLowerCase()===searchTerm.toLowerCase()
       ||item.category.toLowerCase()===searchTerm.toLowerCase()
       ||item.text.toLowerCase().includes(searchTerm)
   )}
   console.log(filteredCheese)
   setCheeses(filteredCheese)
   setSearching(false)
}, [searchTerm])










  return (
    <AppContext.Provider
      value={{ cheeses, loading, setCheeses, searchTerm, setSearchTerm, searching,
        setSearching, setAddCheese, list, error, setList, setError, color, setColor,
        ...state,
        clearCart,
        remove,
        increase,
        decrease,
        toggleAmount, }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
