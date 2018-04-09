import React from 'react'
import { Link } from 'react-router-dom'

// The Navigation creates links that can be used to navigate
// between routes.
const Navigation = () => (
    <nav className="navBar">
        <nav className="wrapper">
            <div className="logo"></div>
            <input type="checkbox" id="menu-toggle" />
            <label htmlFor="menu-toggle" className="label-toggle"></label>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/roster'>Roster</Link></li>
                <li><Link to='/schedule'>Schedule</Link></li>
            </ul>
        </nav>
    </nav>
)

export default Navigation   