import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContainerCardHome from "../ContainerCardHome";
import "./HomeApartadoTienda.css";
import { traerProductos } from "../../redux/actions";

const HomeApartadoVivero = () => {
  const dispatch = useDispatch()
  const arrayVivero = useSelector(state => state.arrayVivero)
  console.log(arrayVivero)
  useEffect(() => {
    dispatch(traerProductos())
  }, [])
  return (
    <>
      {arrayVivero.data?.length ? (
        <div className="containerGlobalCardHomeApartado">
          <h1 style={{ textAlign: "center" }}>
            Mira nuestros productos en el vivero
          </h1>
          <div className="containerCardHomeApartado">
            {arrayVivero.data.slice(0, 6)?.map((produc, i) => {
              return <ContainerCardHome produc={produc} key={i} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HomeApartadoVivero;
