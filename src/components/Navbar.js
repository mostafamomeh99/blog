 import 'bootstrap/dist/css/bootstrap.min.css';
 import Logo from '../imgs/logo.png'
 import { Link } from 'react-router-dom';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import {faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
function Navbar(props){ 
let x=useRef()
let k=()=>{
  x.current.value=""
}
return(<>
<nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={Logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" onClick={k}>
          Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/post">Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link position-relative" to="/fav">Favourite Posts <FontAwesomeIcon icon={faCommentDots} style={{color: "#74C0FC",}} />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {props.counter}
          </span>
    </Link>
        </li>
      </ul>
      <div className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search"
         aria-label="Search"  ref={x}/>
        <Link to='/search'>
        <button className="btn btn-outline-primary"  onClick={()=>{props.search(x.current.value)}} >Search</button>
        </Link>
      </div>
    </div>
  </div>
</nav>
</>
)


}

export default Navbar