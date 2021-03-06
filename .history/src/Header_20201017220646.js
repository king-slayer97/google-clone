import React from 'react'
import "./Header.css"
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from ''

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <p>About</p>
                <p>Store</p>
            </div>
        
            <div className="header__right">
                <p>Gmail</p>
                <p>Images</p>
                <AppsIcon/>
            </div>
        </div>
    )
}

export default Header
