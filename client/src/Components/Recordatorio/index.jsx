import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { recordatorio } from '../../redux/actions'
import io from 'socket.io-client'

const socket = io('http://localhost:3002')
console.log("SOCKETTT", socket)

const Recordatorio = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.user)
    const [enviar, setEnviar] = useState({
        usuario: "",
        horario: ""
    })
    const changeValue = (e) => {
        let tiempo = e.target.value.split(":").join("")
        setEnviar({
            usuario: email.username,
            horario: tiempo
        })
    }
    const enviarRecordatorio = () => {
        socket.emit("recordatorio", enviar)
    }

    useEffect(() => {
        socket.on("cosita", (message) => console.log(message))
    })

    return (
        <div>
            <input
                type='time'
                onChange={changeValue}
                value={enviar.hora}
            />
            <button onClick={enviarRecordatorio} >envialo</button>
        </div>
    )
}

export default Recordatorio;
