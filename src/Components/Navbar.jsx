import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div>
           <Link to="/login" className=''>Login</Link> 
        </div>
    );
};

export default Navbar;