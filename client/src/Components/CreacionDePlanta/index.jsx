import React from "react";
import { plantaCreada } from "../../redux/actions";
import ContainerFormPlanta from "../ContainerFormPlanta";
import "./CreacionDePlanta.css";

const CreacionDePlanta = () => {
  return (
    <div className="containerCreacionPlanta">
      <div className="card shadowForm text-center" style={{ width: "60rem" }}>
        <h2
          className="card-img-top backgroundCrear"
        >
          Crea tu planta
        </h2>
        <div className="card-body">
          <ContainerFormPlanta />
        </div>
      </div>
    </div>
  );
};

export default CreacionDePlanta;
