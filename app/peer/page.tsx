import Peer from '@/components/Peer'
import React from 'react'

const page = () => {
  return (
    <div>
        <div className='max-w-xl mx-auto'>
            <h1 className='font-bold text-xl'>Peer to Peer Cross chain </h1>
            <p>Peer to peer cross chain with brands token, 
            swapping different brands token on peerfyu chain </p>
        </div>
        <div className='mb-20'>
            <Peer />
        </div>
    </div>
  )
}

export default page