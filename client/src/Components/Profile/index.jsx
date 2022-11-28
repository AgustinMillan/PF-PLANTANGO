import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import "./profile.css"

const Profile = () => {
  const { user, isAuthenticated } = useAuth0()
  console.log(user);
  return (
    isAuthenticated ? (
      <div>
        <div>
          <h4><strong>Perfil de Usuario</strong></h4>
          <div><img src={user.picture} alt={user.name} />
            <div>{user.name}</div>
            <div>{user.email}</div>
          </div>
        </div>
      </div>
    ) : null
  )
}

export default Profile