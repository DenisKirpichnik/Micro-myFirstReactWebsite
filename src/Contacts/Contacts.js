import React from "react";
import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";
import "./Contacts.css";

const mapData = {
  center: [47.228716, 39.721569],
  zoom: 18,
};

const coordinates = [[47.228716, 39.721569]];

const YMap = () => (
  <YMaps>
    <Map defaultState={mapData} className="contacts__map">
      {coordinates.map((coordinate) => (
        <Placemark geometry={coordinate} />
      ))}
    </Map>
  </YMaps>
);

function Contacts() {
  return (
    <div className="contacts__container">
      <div className="contacts__text ">
        <p className="contacts__textitem">8(928)164-69-69 </p>
        <p className="contacts__textitem">моя почта daschaev-islam@mail.ru</p>
        <p className="contacts__textitem">мы в соцсетях </p>
        <p className="contacts__textitem">
          Мы находимся в Ростове-на-Дону, по адресу ул. Чехова 71, 5 этаж , 504 офис
        </p>
      </div>

      <div className="contacts__map__wrapper">
        <YMap className="contact__map" />
      </div>
    </div>
  );
}

export default Contacts;
