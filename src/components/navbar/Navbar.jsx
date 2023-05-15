import React, { useState } from 'react'
import "./navbar.css"
const Navbar = () => {

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };


    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="http://5.104.236.70/" className="navbar-logo">
                    <img src="https://media.discordapp.net/attachments/1050812814555615282/1102700614523289620/image_5.png" alt="" />
                </a>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={open ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            Басты бет
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar