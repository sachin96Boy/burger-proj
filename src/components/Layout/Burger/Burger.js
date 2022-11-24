import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

function Burger(props) {
  return (
    <div className='w-full m-auto h-64 overflow-auto text-center font-bold text-lg'>
        <BurgerIngredient type='bread-top' />
        <BurgerIngredient type='cheese' />
        <BurgerIngredient type='meat' />
        <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default Burger