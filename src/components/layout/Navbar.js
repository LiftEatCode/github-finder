import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) => {
    return (
        <nav className='navbar bg-primary'>
            <h1>
                <i className={icon} />{title}
            </h1>
        </nav>
    );
}

//set default props for the component
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
};

//sets what type the props are required to be.
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};


export default Navbar;
