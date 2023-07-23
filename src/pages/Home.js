import React from 'react'
import MotionPizza from '../components/Motionpizza';
import "../styles/Home.css"
import { Link } from "react-router-dom";
function Home() {
 
  return (
   
    <div className="home">

           <div className='headerContainer' >
            <h1>Sifou's Pizza</h1>
            <p>cheesier then a dad's joke</p>
            <MotionPizza/> 
              <Link to="/menu">
                <button type="submit">🍕 Order
                Now!</button>
                </Link>
           </div>
           
    </div>
  )
}

export default Home;