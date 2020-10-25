import React, { useState } from "react";
import { Link } from 'react-router-dom';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import DehazeIcon from '@material-ui/icons/Dehaze';
import CloseIcon from '@material-ui/icons/Close';
import './Header.css'

const Header = () => {

  const baseURL = "";
  const [openDrawer, setOpenDrawer] = useState(false);

  const appDrawerClick = () => {
    setOpenDrawer(!openDrawer)
  }

  window.onscroll = function () {
    const home = document.getElementsByClassName("home")[0];
    const nav = document.getElementsByClassName("navbar")[0];
    if (home.getBoundingClientRect().top < 60) {
      nav.classList.add('scroll')
    }

    if (home.getBoundingClientRect().top > 60) {
      if (nav.classList.contains('scroll')) {
        nav.classList.remove('scroll')
      }
    }


  };
  return (

    <div className="navbar-wrapper">
      <nav className="navbar">
        <div className="navbar-container">

          <Link to={`${baseURL}/`}
            className="navbar-logo" >
            <MenuBookIcon fontSize="large"
              onClick={appDrawerClick}
              style={{ fill: "grey" }}></MenuBookIcon>

          </Link>



          <div className="menu-icon"
            onClick={appDrawerClick}>


            {openDrawer ? <CloseIcon style={{ color: "grey" }}></CloseIcon> :
              <DehazeIcon style={{ color: "grey" }}></DehazeIcon>}

          </div>

          <ul className={openDrawer ? 'nav-menu active' : 'nav-menu'}>
            <li>
              <Link to={`${baseURL}/`} onClick={appDrawerClick}>Home
                </Link>
            </li>
            <li>
              <Link to={`${baseURL}/subjects`} onClick={appDrawerClick}>Subjects
                </Link>
            </li>
            <li>
              <Link to={`${baseURL}/contactus`} onClick={appDrawerClick}>Contact us</Link>
            </li>
            <li>
              <Link to={`${baseURL}/aboutus`} onClick={appDrawerClick}>About us</Link>
            </li>
          </ul>

        </div>
      </nav>


    </div>

  )
}
export default Header;