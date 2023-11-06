import { useState } from "react";
import "./App.css"
const Card=({bNo,name,price,removeBook,updatePrice})=>
{


let[p,setP]=useState();
const handlePrice=(e)=>
{
setP(e.target.value);
}
return(

<>



<div className="d1">

    <input type="text" placeholder="input update price " onChange={handlePrice}/>
    
  <h1> {name}</h1>
  <h2>Price {price}</h2>
  <h3> Book No {bNo}</h3>
   <button onClick={()=>removeBook(bNo)} > Remove</button>
   <button onClick={()=>updatePrice(bNo,p)}> update price </button>
   <hr/>


</div>

</>


)


}

export default Card;