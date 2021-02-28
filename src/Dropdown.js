import React, { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, Button } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { NavLink, Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import CallToActionIcon from "@material-ui/icons/CallToAction";
import RateReviewIcon from "@material-ui/icons/RateReview";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useHistory, useLocation } from "react-router-dom";

function Dropdown({ forwardedRef, open, ...props }) {
  const location = useLocation();
  useEffect(() => {
    const currentPath = location.pathname;
    props.setOpen(false);
  }, [location]);

  return (
    <div ref={forwardedRef} className="header__dropdown">
      <IconButton onClick={() => props.setOpen(!open)}>
        <MenuIcon className="header__dropdownmenu" />
      </IconButton>
      <div className={open == true ? "menu__open" : "menu__closed"}>
        <IconButton className="dropdown__close" onClick={() => props.setOpen(!open)}>
          <CloseIcon className="dropdown__closeIcon" />
        </IconButton>

        <Link exact to="/" activeClassName="selected" className="dropdown__logo">
          <img className="logo" src={logo} alt="logo" className="dropdown__logoimg" />
        </Link>

        <NavLink exact to="/" className="drowdown__link" activeClassName="orange">
          <CallToActionIcon className="dropdown__navicon" />
          <h2 className="dropdown__linktext">Каталог</h2>
        </NavLink>

        <NavLink to="/rent" className="drowdown__link" activeClassName="orange">
          <WhatshotIcon className="dropdown__navicon" />
          <h2 className="dropdown__linktext">Аренда</h2>
        </NavLink>

        <NavLink to="/reviews" className="drowdown__link" activeClassName="orange">
          <RateReviewIcon className="dropdown__navicon" />
          <h2 className="dropdown__linktext">Отзывы</h2>
        </NavLink>

        <NavLink to="/insctruction" className="drowdown__link" activeClassName="orange">
          <YouTubeIcon className="dropdown__navicon" />
          <h2 className="dropdown__linktext">Инструкция</h2>
        </NavLink>

        <NavLink to="/contacts" className="drowdown__link" activeClassName="orange">
          <LocationOnIcon className="dropdown__navicon" />
          <h2 className="dropdown__linktext">Контакты</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Dropdown;
