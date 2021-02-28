import React, { useState } from "react";
import "./Rent.css";
import rented from "./rentedDictionary";
import Product from "../Catalog/Product";
import ContactForm from "../ContactForm";
import ModComponent from "../Catalog/ModComponent";

function Rent() {
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
    <div className="rent__container">
      <div className="rented__grid">
        {rented.map((item) => (
          <Product
            setModal={setModal}
            id={item.id}
            price={item.price}
            image={item.image}
            title={item.title}
            descr={item.descr}
          />
        ))}
      </div>
      <div className={id == 0 ? "rent__modals__hide" : "rent__modals "}>
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

export default Rent;
