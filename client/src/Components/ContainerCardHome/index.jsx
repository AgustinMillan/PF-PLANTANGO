import React from 'react'
import './ContainerCardHome.css'
import { useNavigate } from 'react-router-dom'

const ContainerCardHome = (props) => {
    const navigate = useNavigate()
    const { produc } = props
    console.log("PRODUCTOOOO", produc)
    return (
        <div className="card text-center estilos mediaCard">
            <div className="card-body" style={{ cursor: 'pointer' }}>
                <img className='card-img-top tamanoImg' src={produc.imageProd} />
                <h6 className="card-title" style={{ marginTop: '10px' }}>{produc.nameProd}</h6>
                <a className="btn degrade" onClick={() => navigate('/vivero')} >Visitar vivero</a>
            </div>
        </div>
    )
}

export default ContainerCardHome;
