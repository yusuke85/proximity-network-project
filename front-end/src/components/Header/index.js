import React, {useState} from "react";
import logo from "../Header/img/logo.png"
import { FaBars, FaTimes} from "react-icons/fa"
import { Link } from 'react-router-dom'
import "../Header/Header.css"

const Header = () => {
    // <div className= "l-container"> 
    const [open, setOpen] = useState(false)

    const handleChange = () => {
        setOpen(!open)
    }
    
    return (
        <nav className={`main-header px-5 ${open ? 'open' : ''}`}>
            <Link to="/">
            <img src={logo} alt="..." className="logo"></img>
            </Link>
            <input type="checkbox" id="check" onChange={handleChange}></input>
            <label for="check" className="checkbtn">
            <i class="bi bi-list"></i>
            </label>
            <ul className="main-menu">            
                <li className="main-menu_item">
                    <a className="main-menu_link" href="#">Become a Member</a></li>
                <li className="main-menu_item">
                    <a className="main-menu_link" href="#">Login <i class="bi bi-person-circle icon-navbar"></i></a></li>
            </ul>
        </nav >
    )
}
export default Header;