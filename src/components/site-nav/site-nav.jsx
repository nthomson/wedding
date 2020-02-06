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
                <a target='_blank'
                    href='https://www.myregistry.com/wedding-registry/kylie-mcfarland-and-nicholas-thomson-wake-forest-nc/2189673'
                    className="Nav-Item"
                >
                    Registry
                </a>
            </div>
        </nav>
        
    );
}

export default SiteNav;
