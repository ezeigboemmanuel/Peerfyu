import Navbar from '@/components/Navbar'
import Trade from '@/components/Trade'
import React from 'react'

const page = () => {
  return (
    <div className='px-4'>

      <div className='max-w-3xl mx-auto pt-20'>
        <h1 className='text-3xl font-bold'>Put your funds to work</h1>
        <p>Invest Tokens In Different Brands and earn by investing your funds in top brands. Staking and holding top commerce brands tokens</p>
      </div>

      <Trade />
    </div>
  )
}

export default page