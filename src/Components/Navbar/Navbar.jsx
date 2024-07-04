import React, {useContext} from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [list, setList] = React.useState("shop");
    const {getTotalCartItems} = useContext(ShopContext)
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>OKRIKA</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setList("shop")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/">Shop</Link>{ list === "shop" ? <hr /> : <></>}</li>
                <li onClick={()=>{setList("women")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/women">Women</Link>{ list === "women" ? <hr /> : <></>}</li>
                <li onClick={()=>{setList("men")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/men">Men</Link>{ list === "men" ? <hr /> : <></>}</li>
                <li onClick={()=>{setList("kids")}}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/kids">Kids</Link>{ list === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/login"><button>Login</button></Link>
                <Link style={{textDecoration: 'none', color: 'inherit'}} to="/cart"><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}
export default Navbar
