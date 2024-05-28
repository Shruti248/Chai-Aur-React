import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    // Accessing the params from this -- import useParams first 
    const {userId} = useParams();
  return (
    <div className='bg-gray-400 text-white text-2xl'>
      User : {userId}
    </div>
  )
}

export default User
