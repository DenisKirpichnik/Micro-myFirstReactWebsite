import React, { useState } from "react";
import "./Catalog.css";

import products from "./productsDictionary";
import Product from "./Product";
import ModComponent from "./ModComponent";
import ContactForm from "../ContactForm";

function Catalog() {
  const [id, setId] = useState(0);
  const [productObject, setProductObject] = useState(null);

  function onCloseModal() {
    setId(0);
    setProductObject(null);
  }

  function setModal(productObject) {
    setProductObject(productObject);
    setId(productObject.id);
  }

  return (
    <div className="catalog__container">
      {/* PRODUCTS SECTION */}
      <div className="catalog__grid">
        {/* renders all the products */}
        {products.map((item) => (
          <Product
            key={item.id}
            setModal={setModal}
            id={item.id}
            price={item.price}
            image={item.image}
            title={item.title}
            descr={item.descr}
          />
        ))}
      </div>
      {/* Modal SECTION */}
      <div className={id == 0 ? "catalog__modals__hide" : "catalog_modals "}>
        {productObject != null && (
          <ModComponent
            title={productObject.title}
            image={productObject.image}
            price={productObject.price}
            descr={productObject.descr}
            onCloseModal={onCloseModal}
          />
        )}
      </div>
      <ContactForm />
    </div>
  );
}

export default Catalog;
