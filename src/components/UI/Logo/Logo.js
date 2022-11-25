import React from 'react'

import BurgerLogo from '../../../assets/Logo/bg-removed.png'

function Logo() {
  return (
    <div className='h-4/5 bg-orange-200 rounded-lg box-border'>
        <img className='h-full object-cover' src={BurgerLogo} alt="Burger shop" />
    </div>
  )
}

export default Logo