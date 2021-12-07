import React from 'react';

const Navbar = ({brand}) => {
    return ( 
        <nav className="navbar navbar-dark bg-primary">
            <div className="container">
                <a href="#!" className="navbar-brand">{brand}</a>
            </div>
        </nav>
    );
}
 
export default Navbar;