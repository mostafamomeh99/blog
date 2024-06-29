import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Postdetails from './components/Postdetails';
import Post from './components/Post';
import { Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Fav from './components/Fav';
import Search from './components/Search';
function App() {
  let [count,setcount]=useState(0)
  let [idf,setidf]=useState([])
let [searchnav,setsearchnav]=useState([])
  let handle=(i)=>{
    if (!idf.includes(i))
     {
      setcount(count+1)
      setidf([i,...idf]) } 
  }
let nohandle=(y)=>{
 let p= idf.filter((k)=>{return k!==y?k:""})
 setidf(p)
  setcount(count-1)
}
let searchx=(i)=>{
  setsearchnav([i])
}
console.log(searchnav)
  return (
    <div className="App">
    <Navbar counter={count} search={searchx}/>
    <Routes>
      <Route path='/' element={<>  <br/>  <Home add={handle} rem={nohandle} v={idf} searchh={searchnav} /></>}  />
      <Route path='/about' element={<> <About/> </>}/>
      <Route path='posts/:postid' element={<> <br/> <Postdetails add={handle} rem={nohandle}  v={idf}/> </>}/>
      <Route path='/post' element={<> <br/> <Post/>  </>}/>
      <Route path='/fav' element={<> <br/> <Fav idfp={idf} v={idf}/> </>}/>
      <Route path='/search' element={<> <br/> <Search search={searchnav} v={idf} rem={nohandle} add={handle}/> </>}/>
    </Routes>
    </div>
  );
}

export default App;
