import React from 'react';
import "./Header.css";
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import {Link}

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <p className="desc">About</p>
                <p className="desc">Store</p>
            </div>
        
            <div className="header__right">
                <p className="desc">Gmail</p>
                <p className="desc">Images</p>
                <AppsIcon/>
                <Avatar src=""/>
            </div>
        </div>
    )
}

export default Header
