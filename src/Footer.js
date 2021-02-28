import React from "react";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import logo from "./images/logo.jpg";

function Footer({ executeScroll }) {
  return (
    <div className="footer__container">
      <button onClick={executeScroll} className="button__totop">
        Наверх
      </button>

      <div className="footer__inside">
        <div className="footer__leftPart half">
          <div className="footer__logo__container">
            <Link to="/" className="footer__logo">
              <img className="logo__footer" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="footer__navigation">
            <h5 className="h5">Навигация</h5>
            <Link to="/" className="footer__link">
              <p>Каталог</p>
            </Link>

            <Link to="/contacts" className="footer__link">
              <p>Контакты</p>
            </Link>

            <Link to="/rent" className="footer__link">
              <p>Аренда</p>
            </Link>

            <Link to="/reviews" className="footer__link">
              <p>Отзывы</p>
            </Link>

            <Link to="/insctruction" className="footer__link">
              <p>Инструция</p>
            </Link>
          </div>
        </div>
        <div className="footer__rightPart half">
          <div className="footer__address">
            <h5 className="h5">Наш адрес</h5>
            <p>г.Ростов-на-дону</p>
            <p>ул. Чехова 71</p>
            <p> 5 этаж, офис 504</p>
          </div>

          <div className="footer__contacts">
            <h5 className="h5">Телефон</h5>
            <p>8(928)164-69-69</p>
            <h5 className="h5">Email</h5>
            <p>daschaev-islam@mail.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
