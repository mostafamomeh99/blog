import 'bootstrap/dist/css/bootstrap.min.css';
import Cardofposts from './Cardofposts';
import { useParams } from 'react-router-dom';
import { useEffect,useState } from 'react';
function Postdetails(props){
    let [data,setdata]=useState([])
let r=useParams()
    useEffect(
    ()=>{
        fetch(`http://localhost:4000/posts/${r.postid}`)
        .then((response)=>response.json())
        .then((responsex)=>setdata([responsex]))
    }
    ,[r.postid])
  
return(
    <div className="container">
        {data.map((el)=>{
            return(<Cardofposts post={el} key={el.id} showdetails={false} 
                addfav={props.add} showfav={true} vv={props.v} remove={props.rem} t={true} />
            )
        })}
    
</div>
)
}

export default Postdetails