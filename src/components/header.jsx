import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/svg/logo.svg';
import './header.css';

export default () => {
    return (
        <div className="Header">
            <div className="center">
                <Link to="/"><img className="Logo" src={Logo} alt="Logo" /></Link>
            </div>
        </div>
    )
}