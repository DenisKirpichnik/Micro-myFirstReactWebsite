import React, { useRef } from "react"; //rfce
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavLink, Link } from "react-router-dom";

import Header from "./Header";
import Catalog from "./Catalog/Catalog";
import Rent from "./Rent/Rent";
import Reviews from "./Reviews/Reviews";
import Insctruction from "./Instruction/Insctruction";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer";
import banner13 from "./images/banner13.jpg";
import banner12 from "./images/banner12.jpg";

function App() {
  const scrollToRef = (ref) => window.scrollTo(0, 0);

  const scrollRef = useRef(null);

  function executeScroll() {
    scrollToRef(scrollRef);
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app__banner">
          <img className="banner__img" src={banner13} />
          <img className="banner__imgSmall" src={banner12} />
          <div className="banner__btns">
            <Link exact to="/" className="banner__link">
              <button className="banner__btnBuy bannerBtn"> Купить</button>
            </Link>
            <Link exact to="/rent" className="banner__link">
              <button className="banner__btnRent bannerBtn">Арендовать</button>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/rent">
            <Rent />
          </Route>

          <Route path="/reviews">
            <Reviews />
          </Route>

          <Route path="/insctruction">
            <Insctruction />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>

          <Route path="/">
            <Catalog />
          </Route>
        </Switch>
        <Footer executeScroll={executeScroll} />
      </div>
    </Router>
  );
}

export default App;
