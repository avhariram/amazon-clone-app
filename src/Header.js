import React from 'react'
import './Header.css'
// building the header component
function Header() {
    return (
        <div className="header">
            {/* basically the company logo, to be styled later */}
            <img 
            className ="header__logo"
            src ="https://www.globalcosmeticsnews.com/wp-content/uploads/2019/01/amazon-625x352.jpg" 
            alt="Company logo" 
            />
            <div className="header__search">
                {/* the search bar; which is an input */}
                <input 
                className="header__searchInput"
                type="text"/>
                {/* Logo can go here */}
            </div>
            {/* the navigation menu */}
            <div className="header__nav">
                {/* have each component in their own div, allows styling, these are the header nav elements */}
                <div className="header__option">
                    {/* div elements are block elements,and styled as such, span elements are the equivalent of in-line div elements, they are't block elements */}
                    {/* wrap the button icons in span elements for the nav menu to have them appear in-line */}
                    {/* and put each bit of text on a new line, each option */}
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header
