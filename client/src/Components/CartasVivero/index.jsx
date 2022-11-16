import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { traerProductos } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import './CartasVivero.css'

const CartasVivero = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const arrayVivero = useSelector(state => state.arrayVivero)
    useEffect(() => {
        dispatch(traerProductos())
    }, [])
    return (
        <div className='containerCardVivero'>
            {
                arrayVivero.data?.map((produc, index) => {
                    return (
                        <div key={index} className='cardContainerVivero estilos' onClick={() => navigate(`/vivero/${produc.codProd}`)}>
                            <img src={produc.imageProd} alt='img' className='imgVivero' />
                            <h4 className='price'>{`$${produc.price}`}</h4>
                            <p className='nameProduc' style={{ textAlign: 'center' }}>{produc.nameProd}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartasVivero;