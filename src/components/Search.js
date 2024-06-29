import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect,useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Cardofposts from './Cardofposts';
import { Link, useNavigate } from 'react-router-dom';

function Search(props){

   let c=useNavigate()
    let [datasearch,setdatasearch]=useState([])


    useEffect(
        ()=>{
            fetch('http://localhost:4000/posts')
            .then((response)=>response.json())
            .then((responsex)=>{ if(props.search.length!==0)
                { let arraysearch=responsex.map((el,i,a)=>{
                    return el={title: el.title.split(" "),id:el.id,userId:el.userId,body:el.body}
                })
                console.log(arraysearch)
                let u=arraysearch.map((el)=>{
                    let y=[]
                    for (let k=0;k<el.title.length;k++)
                        {
                            if(props.search.includes(el.title[k]))
                                {y.push({title:el.title.join(" "),id:el.id,userId:el.userId,body:el.body})} }      
                return y
                        })

                        console.log(u) 
                        let r= u.filter((el)=>{
                            return el.length===0?"":el;
                        })
                        console.log(r)
                        if (r.length!==0)
                            {
                                let p=r.map((el,i,a)=>{
                                    return el[0] 
                                })
                                setdatasearch(p)}
             
                
else {setdatasearch([])}
            }}
        
        )}
       
        ,[props.search])

    
let k=(i)=>{
    c(`/posts/${i}`)
}
       
            console.log(datasearch) 
 return(<div className="container">
     
    {datasearch.length!==0?datasearch.map(el=>{
    return(
        <Cardofposts post={el} key={el.id} showdetails={true}  addfav={props.add} showfav={true} vv={props.v}
        remove={props.rem} searchx={k} t={false}/>)}) :<><h1>"no item"</h1> <Link to='/' ><button className="btn btn-primary" >back Home</button> </Link > </>} 
    </div>)
}

export default Search