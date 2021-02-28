import React from "react";
import "./Product.css";

function Product({ id, title, image, price, descr, ...props }) {
  let productObject = { id: id, title: title, image: image, price: price, descr: descr };

  return (
    <div className="product">
      <div className="product__info">
        <p className="product__title">{title}</p>
      </div>
      <img src={image} alt="product" className="product_img" />
      <p className="product__price">
        <small>₽</small>
        <strong>{price}</strong>
      </p>
      <button onClick={() => props.setModal(productObject)} className="product__button">
        Подробнее
      </button>
    </div>
  );
}

export default Product;
