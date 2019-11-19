import React from 'react';
import { NavLink } from "react-router-dom";

import './site-nav.css';

const SiteNav = () => {
    return (
        <nav className="Site-Nav">
            <div className="container">
                <NavLink to='/' exact className="Nav-Item">Wedding</NavLink>
                <NavLink to='/photos' className="Nav-Item">Photos</NavLink>
                <NavLink to='/travel' className="Nav-Item">Travel</NavLink>
                <NavLink to='/registry' className="Nav-Item">Registry</NavLink>
                <NavLink to='/rsvp' className="Nav-Item">RSVP</NavLink>
            </div>
        </nav>
        
    );
}

export default SiteNav;
