import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./index.css";
import { addFav, deleteFav, editPlantforLike } from "../../redux/actions";

const Cartas = (props) => {
  const user = useSelector((e) => e.user);
  const favorites = useSelector((e) => e.favoritos);
  const dispatch = useDispatch();

  function addfav(e, item, user) {
    e.preventDefault();
    if (!user.idUser) {
      alert("Debes Iniciar sesion para usar Favoritos :)");
    }
    if (user.idUser) {
      if (e.target.className === "favOFF") {
        dispatch(addFav(user.idUser, item.id));
        dispatch(
          editPlantforLike({
            codPlant: item.id,
            namePlant: item.nombre,
            descripPlant: item.descripcion,
            tipo: item.caracteristica,
            imagePlant: item.img,
            likes: item.likes + 1,
          })
        ).then(props.aux("like"));
      } else if (e.target.className === "favON") {
        dispatch(deleteFav(user.idUser, item.id));
        dispatch(
          editPlantforLike({
            codPlant: item.id,
            namePlant: item.nombre,
            descripPlant: item.descripcion,
            tipo: item.caracteristica,
            imagePlant: item.img,
            likes: item.likes - 1,
          })
        ).then(props.aux("like"))
      }
    }
  }

  function onOf(item, favorites) {
    if (favorites) {
      if (favorites.find((e) => e.codPlant === item.id)) {
        return "favON";
      } else {
        return "favOFF";
      }
    }
  }
  return (
    <div className="contenedorCartasFavoritos">
      <div className="cartas">
        {/* <!-- producto... --> */}
        {props.items?.map &&
          props.items.map((item, i) => (
            <div className="card carta">
              {item.img && (
                <Link
                  key={i}
                  to={`/huerta/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={item.img}
                    alt="Un producto"
                    loading="lazy"
                    className="imagen cabeza"
                  />
                </Link>
              )}
              <div className="cuerpo">
                <div>
                  {item.nombre && (
                    <h3 className="cuerpo-titulo">{item.nombre}</h3>
                  )}
                  {item.subnombre && (
                    <h4 className="cuerpo-subtitulo">{item.subnombre}</h4>
                  )}
                  {item.caracteristica && (
                    <p className="cuerpo-caracteristica">
                      {item.caracteristica.map((caracteristica, i) => (
                        <span
                          className="cuerpo-caracteristica-caracteristica"
                          key={i}
                        >
                          {caracteristica}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
                {item.precio && (
                  <p className="cuerpo-precio">${item.precio / 100}</p>
                )}
                <p>{item.likes}</p>
                <button
                  className={
                    favorites.length ? onOf(item, favorites) : "favOFF"
                  }
                  onClick={(e) => addfav(e, item, user)}
                />
              </div>
            </div>
          ))}

        {/* <!-- More products... --> */}
      </div>
    </div>
  );
};

export default Cartas;
// user && favorites.includes((e) => e.codPlant === item.id)
//                       ? "favON"
//                       :
