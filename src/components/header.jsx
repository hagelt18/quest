import React from 'react';
// import { ReactComponent as Logo } from '../assets/svg/logo.svg';
import Logo from '../assets/svg/logo.svg';
import './header.css';
// const chestGif = require('../assets/images/chest3d.gif');

export default () => {
    return (

        <div className="Header">
            <img className="Logo" src={Logo} alt="Logo" />
        </div>
    )
}