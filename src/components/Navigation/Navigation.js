import React from 'react'
import { Link } from 'react-router-dom'

const hideNavigationMobile = () => {
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.checked = false;
}

// The Navigation creates links that can be used to navigate
// between routes.
const Navigation = () => (
    <nav className="navBar">
        <nav className="wrapper">
            <div className="logo"></div>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="label-toggle"></label>
            <ul>
                <li><Link to='/' onClick={() => hideNavigationMobile() }>Home</Link></li>
                <li><Link to='/marvel' onClick={() => hideNavigationMobile() }>Marvel</Link></li>
                <li><Link to='/contact' onClick={() => hideNavigationMobile() }>Contact</Link></li>
                <li><Link to='/roster' onClick={() => hideNavigationMobile() }>Roster</Link></li>
                <li><Link to='/schedule' onClick={() => hideNavigationMobile() }>Schedule</Link></li>
            </ul>
        </nav>
    </nav>
)

export default Navigation   