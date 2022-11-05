import React from 'react'
import { Notifications } from '@material-ui/icons'
import { Badge } from '@material-ui/core'

const MenuNotificaciones = () => {
    return (
        <div class="dropstart">
            <button class="btn btn-light backgroundBtn" type="button" aria-expanded="false" id="dropdownMenu1" data-toggle="dropdown">
                <Badge badgeContent={1} color='error'>
                    <Notifications color='secondary' />
                </Badge>
            </button>
            <div class="dropdown-menu">
                <p class="dropdown-item">No tiene ninguna notificación</p>
            </div>
        </div>
    )
}

export default MenuNotificaciones;
