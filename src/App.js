import React ,{useEffect, useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Recipe from "./component/RecipeComponent"

const App =(props) =>{
  const [alcohol,setAlcohol]=useState([""])
  const [search,setSearch]=useState('')
  const [query,setQuery]=useState("beers")

useEffect(()=>{
  getbeer();
 
},[query])




const API_KEY=`https://api.punkapi.com/v2/${query}?brewed_before=11-2012&abv_gt=6`


const getbeer = async() =>{
const response = await fetch (API_KEY)
const data = await response.json()
console.log(data)


  setAlcohol(data)
 




}

const updateSearch = e =>{
setSearch(e.target.value)
console.log(search)


}


const getSearch = (e) =>{
  e.preventDefault();
  setQuery(search)
  setSearch('')
}


  return(
    <div className="App">
<form onSubmit={getSearch} className="serch-form" >
  <input type="text" className="serch-bar" name="search" value={search} onChange={updateSearch}/>
  <button type="submit" className="serch-button btn btn-success">search</button>

</form>

<div className="container">
<div className="wrap_card">


{alcohol.map((alcohols) =>(
  <Recipe
  key={alcohols.id}
name={alcohols.name}
image={alcohols.image_url}
description={alcohols.description}
  
  />
))}



</div>
</div>
    </div>
  )
}
export default App
