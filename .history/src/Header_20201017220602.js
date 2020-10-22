import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <p>About</p>
                <p>Store</p>
            </div>
        
            <div className="header__right">
                <p>Gmail</p>
                <p></p>
            </div>
        </div>
    )
}

export default Header
