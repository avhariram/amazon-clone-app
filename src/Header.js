import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; //code snippets from material-ui website
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

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
                {/* put the search icon next to the search bar */}
                <SearchIcon 
                className="header__searchIcon" />
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
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    {/* assign 2 classnames to the basketIcon; will be styled and positioned as per option__lineTwo and the other classname */}
                    <span className="header__basketCount header__optionLineTwo">
                        0 
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Header
