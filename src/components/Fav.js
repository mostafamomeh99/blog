import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Cardofposts from './Cardofposts';
function Fav(props){
let [data,setdata]=useState([])
let [itemid]=[props.idfp]
console.log(data)
console.log(itemid)

useEffect(
    ()=>{
    fetch(`http://localhost:4000/posts`)
    .then((response)=>response.json())
    .then((responsex)=>{
       let z =responsex.filter((el)=>{return (itemid.includes(el.id)?el:"")})
setdata(z)
    }) }
,[itemid])
    console.log(data)
    console.log(itemid)
    return(
        <div className="container">
{data.length!==0?data.map(el=>{
return(<Cardofposts post={el} key={el.id} showdetails={false} showfav={false} vv={props.v} t={true}/>)
 }):<h1>"there is no item"</h1>}
          </div>  
 )
}

export default Fav



