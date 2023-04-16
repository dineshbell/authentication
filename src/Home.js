import React from 'react'
import { auth } from './firebase'

const Home = ({presentUser}) => {
  return (
    <div>
      <h4>Welcome {presentUser.email}</h4>
      <button onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Home
