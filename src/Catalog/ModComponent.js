import React, { useState } from "react";
import "./ModComponent.css";

function ModComponent({ title, image, descr, price, id, ...props }) {
  return (
    <div className="modal">
      <div className="modal__innerContainer">
        <div className="modal__content__left">
          <img src={image} className="modal__image" />
        </div>
        <div className="modal__content__right">
          <h1 className="modal__title"> {title}</h1>
          <h2 className="modal__description">Подробное описание</h2>
          <p className="modal__firstText">{descr} </p>
          <p className="modal__secondText">{descr} </p>
          <p className="modal__price">
            <small> ₽</small>
            <strong> {price}</strong>
          </p>
          <button onClick={props.onCloseModal} className="modal_closeBtn">
            закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModComponent;
