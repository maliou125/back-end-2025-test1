import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Images/logo.png'
import cart_icon from '../Images/cart_icon.png'
import { Link,} from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Images/nav_dropdown.png'


const Navbar = () => {

        const[menu,setMenu] =useState("shop")
        const {getTotalCartItems}= useContext(ShopContext);
        const menuRef = useRef();

        const dropdown_toggle = (e) =>{
          menuRef.current.classList.toggle('nav-menu-visible');
          e.target.classList.toggle('open');
        }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className='logo-img' src={logo} alt="" />
        <p>Mini Store</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
     <ul ref = {menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:'none'}} to ='/' >Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("mans")}}><Link style={{textDecoration:'none'}} to ='/mans'>Men</Link>{menu==="mans"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to ='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to ='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
     </ul>
     <div className="nav-login-cart">
       {localStorage.getItem('auth-token')
       ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
       :<Link to ='/login'><button>Login</button></Link>}
        
        <Link to = '/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        
     </div>

    </div>
  )
}

export default Navbar
