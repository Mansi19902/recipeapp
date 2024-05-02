import { useEffect, useState } from "react"
import Recipe from "./Recipe"
const App = () =>{
 
  const [search, setSearch] = useState('')
  const [query,setQuery] = useState('chicken')
  const [recipes, setRecipes] = useState([])
  const appID ='85b17427'
  const appKey = '49cd13b8a2088efe858a0aa0d959d1b2'
  const onSubmitHandler = e=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
   // getRecipe()
  }

  const getRecipe = async ()=>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`)
    const res = await response.json()
    setRecipes(res.hits)
  }

  useEffect(()=>{
    getRecipe()
  },[query])

  

  return  recipes.length ===0 ? <h1>Data not found</h1> : <div className="App">
    <h1>Recipe App</h1>
    <form onSubmit={onSubmitHandler}>
    <input type="text" value={search} onChange={e => setSearch(e.target.value)}/>
    <button type="submit">Search</button>
    </form>
    {
      recipes.map((item,idx) => <Recipe {...item.recipe} key={idx}/>)
    }

    
  </div>
  
}

export default  App