import React, { useState } from 'react'
import './CartasVivero.css'

const CartasVivero = (props) => {
    const [cantidad, setCantidad] = useState({})
    const { productos } = props;
    const cambiarCantidad = (e, index) => {
    }
    const subirAlStorage = (producto) => {
        console.log(producto)
        localStorage.setItem("carrito", [JSON.stringify({
            ...producto,
            cantidad: cantidad
        })])
    }
    return (
        <div className='containerCardVivero'>
            {
                productos?.map((produc, index) => {
                    return (
                        <div key={index} className='cardContainerVivero estilos'>
                            <h3>{produc.NOMBRE}</h3>
                            <img src={produc.IMAGEN} alt='img' className='imgVivero' />
                            <h6 style={{ textAlign: 'center' }}>{produc.TIPO}</h6>
                            <div className='containerCantidad'>
                                <button name='menos' onClick={(e) => cambiarCantidad(e, index)}>-</button>
                                <h5 className='cantidadVariada'>{cantidad[index] ? cantidad[index] : 0}</h5>
                                <button name='mas' onClick={(e) => cambiarCantidad(e, index)}>+</button>
                            </div>
                            <button className='btnAgregarCarrito' onClick={() => subirAlStorage(produc)}>
                                <p>Agregar al carrito</p>
                                Agregar al carrito
                            </button>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartasVivero;