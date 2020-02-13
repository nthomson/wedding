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
                    href='https://www.blueprintregistry.com/registry/kylie-mcfarland-wedding-registry-10-23-2020'
                    className="Nav-Item"
                >
                    Registry
                </a>
            </div>
        </nav>
        
    );
}

export default SiteNav;
