import React from "react";
import "./Instruction.css";
import ReactPlayer from "react-player";

function Insctruction() {
  return (
    <div className="instruction__container">
      {/* player div */}
      <div className="reactplayer__container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=JjUbXH3Nn3g&ab_channel=%D0%9C%D0%B8%D0%BA%D1%80%D0%BE%D0%BD%D0%B0%D1%83%D1%88%D0%BD%D0%B8%D0%BA%D0%B8Microgadgets"
          playing="false"
          width="100%"
          height="90%"
          controls="true"
        />
      </div>

      {/* written instruction  */}
      <div className="instruction__written">
        <h2 className="instruction__header">Инструкция</h2>

        <p className="instruction__text">
          1)It is a long established fact that a reader will be distracted by the readable content
        </p>
        <p className="instruction__text">
          2)It is a long established fact that a reader will be distracted by the readable content
        </p>
        <p className="instruction__text">
          3)It is a long established fact that a reader will be distracted by the readable content
        </p>
        <p className="instruction__text">
          4)It is a long established fact that a reader will be distracted by the readable content
        </p>
        <p className="instruction__text">
          5)It is a long established fact that a reader will be distracted by the readable content
        </p>
        <p className="instruction__text">
          6)It is a long established fact that a reader will be distracted by the readable content
        </p>
      </div>
    </div>
  );
}

export default Insctruction;
