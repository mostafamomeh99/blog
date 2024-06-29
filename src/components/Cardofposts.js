import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

function Cardofposts(props){

let f=props.vv
if (f.includes(props.post.id))
  {return(<div className='row row-cols-1 mb-3'>
    <div className='col'>
    <div className="card">
    <h5 className="card-header">user{props.post.userId}</h5>
    <div className="card-body">
      <h2 className="card-title">{props.post.title}</h2>
      <p className="card-text">{props.post.body}</p>
      {props.showdetails?props.t&&<Link to={`posts/${props.post.id}`} ><button className="btn btn-primary" >post details</button></Link >:
      <Link to='/' ><button className="btn btn-primary" >back Home</button></Link > }
{props.t?"":<button className="btn btn-primary" onClick={()=>{props.searchx(props.post.id)}}>post details</button>}
        {props.showdetails?props.showfav&&<button className="btn btn-danger mx-2"
         onClick={()=>{props.remove(props.post.id)}}>Remove from Favourite</button>:"" }
    </div>
    </div>
    </div>
      </div> )}

else{
  return(
 <div className='row row-cols-1 mb-3'>
  <div className='col'>
  <div className="card">
  <h5 className="card-header">user{props.post.userId}</h5>
  <div className="card-body">
    <h2 className="card-title">{props.post.title}</h2>
    <p className="card-text">{props.post.body}</p>
    {props.showdetails?props.t&&<Link to={`posts/${props.post.id}`} className="btn btn-primary">post details</Link >:
    <Link to='/' className="btn btn-primary">back Home</Link > }
    {props.t?"":<button className="btn btn-primary" onClick={()=>{props.searchx(props.post.id)}}>post details</button>}
      {props.showdetails?props.showfav&&<button className="btn btn-primary mx-2"
       onClick={()=>{props.addfav(props.post.id)}}>Add to Favourite</button>:"" }
  </div>
  </div>
  </div>
    </div> ) }




}




export default Cardofposts

