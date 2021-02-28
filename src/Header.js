import React, { useState, useRef, useEffect } from "react"; //rfce
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import InstagramIcon from "@material-ui/icons/Instagram";
import vk from "./images/vk1.jpg";
import logo from "./images/logo.jpg";
import ContactForm from "./ContactForm";

import Dropdown from "./Dropdown";

function Header() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  React.useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <nav className="header">
      {/* 0 DropDown */}

      <Dropdown open={open} forwardedRef={wrapperRef} setOpen={setOpen} />

      {/* 1.LOGO */}
      <Link exact to="/" className={open == true ? "header__logohidden" : "header__logo"}>
        <img className="logo" src={logo} alt="logo" />
      </Link>

      {/*2. Links container */}
      <div className="header__links">
        <NavLink exact to="/" className="header__link" activeClassName="active">
          <div className="header__сatalog">
            <h2>Каталог</h2>
          </div>
        </NavLink>

        <NavLink to="/rent" className="header__link" activeClassName="active">
          <div className="header__сatalog">
            <h2>Аренда</h2>
          </div>
        </NavLink>

        <NavLink to="/reviews" className="header__link" activeClassName="active">
          <div className="header__сatalog">
            <h2>Отзывы</h2>
          </div>
        </NavLink>

        <NavLink to="/insctruction" className="header__link" activeClassName="active">
          <div className="header__сatalog">
            <h2>Инструкция</h2>
          </div>
        </NavLink>

        <NavLink to="/contacts" className="header__link" activeClassName="active">
          <div className="header__сatalog">
            <h2>Контакты</h2>
          </div>
        </NavLink>
      </div>

      {/* 3.CIty name and link to navigation */}
      <Link to="/contacts">
        <div className="contacts__location">
          <LocationOnIcon className="contact__icon" />
          <p className="contacts__locationText">Ростов-на-Дону</p>
        </div>
      </Link>

      {/* leave a request to call back??? 
      <div className="header_callback">
        <button type="submit" className="callback__button" onClick={summonContactForm}>
          Вам перезвонить?
        </button>
      </div>
      */}

      {/* 4. Contacts */}
      <div className="header__contacts">
        <a
          href="https://vk.com/mikro161rnd"
          target="https://vk.com/mikro161rnd"
          className="contacts__link1"
        >
          <img src={vk} alt="banner" className="vk" />
        </a>
        <a
          href="https://www.instagram.com/micronadonu/"
          target="https://www.instagram.com/micronadonu/"
          className="contacts__link2"
        >
          <InstagramIcon className="ins" />
        </a>
      </div>
    </nav>
  );
}

export default Header;
