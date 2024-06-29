import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Post(){
let [data,setdata]=useState({})
let [posts,setposts]=useState([])
let x=useNavigate()
useEffect(
    ()=>{
        fetch('http://localhost:4000/posts')
        .then((response)=>response.json())
        .then((responsex)=>setposts(responsex))
    }
    ,[])

let takeinput=(e)=>{
setdata({...data,[e.target.name]:e.target.value,id:parseFloat(posts[posts.length-1].id)+1,userId:99})
}
let h=()=>{ console.log(data)
  fetch('http://localhost:4000/posts',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data),
  })
  .then((response)=> response.json())
  .then((dat)=> console.log(dat))
x('/')
}
return( <>
    <div className="mb-3">
  <label  className="form-label text-light">Title of post</label>
  <input type="text" className="form-control" name='title'
   id="exampleFormControlInput1" placeholder="enter title" onChange={takeinput}/>
</div>
<div className="mb-3">
  <label  className="form-label text-light">post body</label>
  <textarea className="form-control " id="exampleFormControlTextarea1" rows="5" name='body'onChange={takeinput}></textarea>
  <div className="container text-center"><button className="btn btn-primary mt-3" onClick={h}>Post blog</button></div>
</div>
</>
)
}

export default Post