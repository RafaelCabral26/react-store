import React from 'react'
import NavBar from '../components/Navbar'
import Products from '../components/Products'
import { products } from '../data/data'

export const Home = () => {
  const [produtos, productsState] = React.useState(products);
  
  return (
    <div>
      <NavBar produtos={produtos} productsState={productsState}></NavBar>
     <Products produtos={produtos}></Products>
    </div>
  )
}


