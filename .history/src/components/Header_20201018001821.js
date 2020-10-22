import React from 'react';
import "./Header.css";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <Link to="/about"><p className="desc">About</p></Link>
                <Link to="/"><p className="desc">Store</p></Link>
            </div>
        
            <div className="header__right">
            <Link><p className="desc">Gmail</p></Link>
            <Link><p className="desc">Images</p></Link>
                <AppsIcon/>
                <Avatar src=""/>
            </div>
        </div>
    )
}

export default Header
