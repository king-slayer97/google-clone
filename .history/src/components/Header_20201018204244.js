import React from 'react';
import "./Header.css";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/about">About</p></Link>
                <Link to="/store">Store</p></Link>
            </div>
        
            <div className="header__right">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
                <AppsIcon/>
                <Avatar src=""/>
            </div>
        </div>
    )
}

export default Header
