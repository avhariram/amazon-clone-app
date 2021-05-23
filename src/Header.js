/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; //code snippets from material-ui website
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

// building the header component
function Header() {

 //grab the basket details from the global store and update the itesm in the basket store; destructured from the state, no use for dispatch here
 const[{basket, user}, dispatch] = useStateValue();
 
 const handleAuthentication = () =>{ //could be called anything, sign-out maybe more straightforward
     if(user){
         auth.signOut(); //sign out using firebase
     }
 }

    return (
        <div className="header">
            {/* use Link component to allow children to Route as required to the "to" property */}
            <Link to="/">
                <img 
                className ="header__logo"
                src ="https://www.globalcosmeticsnews.com/wp-content/uploads/2019/01/amazon-625x352.jpg" 
                alt="Company logo"
                />
            </Link>
            {/* basically the company logo, to be styled later */}
            
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
                <Link to={!user && '/login'}>
                    {/* if there is no user then route to login page. The on-click logout will only work if there is a user */}
                {/* have each component in their own div, allows styling, these are the header nav elements */}
                <div onClick={handleAuthentication} className="header__option">
                    {/* div elements are block elements,and styled as such, span elements are the equivalent of in-line div elements, they are't block elements */}
                    {/* wrap the button icons in span elements for the nav menu to have them appear in-line */}
                    {/* and put each bit of text on a new line, each option */}
                    <span className="header__optionLineOne">
                       {user ? `Hello ${user.email}` : "Hello Guest"}
                    </span>
                    <span className="header__optionLineTwo">
                        {user ? 'Sign Out': 'Sign In'}
                    </span>
                </div>
                </Link>

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
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        {/* assign 2 classnames to the basketIcon; will be styled and positioned as per option__lineTwo and the other classname */}
                        <span className="header__basketCount header__optionLineTwo">
                            {basket?.length} 
                            {/* optional chaining->  ?.; when basket ref is undefined or null; still allows access. If there is a basket, then access its length basically*/}
                        </span>

                    </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
