import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

export default function NavigationItems() {
  return (
    <ul className='m-0 p-0 flex items-center h-full'>
        <NavigationItem link="/">Burger builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  )
}
