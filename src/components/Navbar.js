import React ,{useState} from 'react'
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import   '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [openLinks,setopenLinks] = useState(false);
  const toggleNavbar =()=> {
   setopenLinks(!openLinks);
  }
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open":"close" }>
            <img src={Logo} alt='logo'/>
            <div className='hiddenLinks'>
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
            </div>
        </div>
        <div className="rightSide">
          <Link to="/">Home</Link>
          <Link to="/Menu">Menu</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon/>
          </button>
        </div>
    </div>
  )
}

export default Navbar