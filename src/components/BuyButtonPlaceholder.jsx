'use client';

import React from 'react'

function BuyButtonPlaceholder() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <button onClick={() => {alert('TODO: Procesar ordenes')}} className='product-buy-button'>¡Lo quiero! 😎</button>
    </div>
  )
}

export default BuyButtonPlaceholder