import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'

export default function NavigationItems(props) {
  return (
    <ul className='m-0 p-0 flex flex-col items-center h-full lg:flex-row'>
        <NavigationItem link="/">Burger builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
  )
}
