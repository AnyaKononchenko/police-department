import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='links flex-centered'>
            <Link to='/'>Department</Link>
            <Link to='/team'>Team</Link>
            <Link to='/cases'>Cases</Link>
            <Link to='/new-case'>Add a Case</Link>
        </nav>
    )
}

export default Navbar