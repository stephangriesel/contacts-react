import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBar = ({ title, icon }) => {
    return (
        <div className="navbar bg-primary">
            <h1>
                <i className={icon}></i>{title}
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>
                <li>
                    <Link to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

NavBar.defaultProps = {
    title: 'My Contacts',
    icon: 'fas fa-users'
}

export default NavBar
