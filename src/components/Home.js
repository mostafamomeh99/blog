import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Cardofposts from '../components/Cardofposts'

function Home (props){
let [data,setdata]=useState([])

useEffect(
()=>{
    fetch('http://localhost:4000/posts')
    .then((response)=>response.json())
    .then((responsex)=>setdata(responsex))
}
,[])


return(
<div className="container">
{data.map(el=>{
return(
    <Cardofposts post={el} key={el.id} showdetails={true}  addfav={props.add} showfav={true} vv={props.v}
    remove={props.rem} t={true} />
)

})} 
</div>

)
}

export default Home