import React from 'react'
import './Header.css'
// import SearchIcon from "@material-ui/icons/Search"

function Header() {
  return (
    <div className='header'>

      <img  className='header_logo'
      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'> Deliver to</span>
          <span className='header_optionLineTwo'>India </span>
        </div>
      </div>

      <div className='header_search'>
        <input className='header_searchInput' type='text' placeholder='Search Amazon' />
        {/* <SearchIcon className= "header_searchIcon"/> */}
        {/* Logo */}
        {/*  */}
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <span className='header_optionLineOne'> Hello,</span>
          <span className='header_optionLineTwo'> Sign in </span>
        </div>

        <div className='header_option'>
          <span className='header_optionLineOne'> Returns </span>
          <span className='header_optionLineTwo'> & Orders</span>
        </div>

        <div className='header_optionBasket'>
          <span className='header_optionLineTwo header_basketCount'>0 Cart</span>
        </div>
      </div>
    </div>
  )
}

export default Header
