import  React, {useEffect } from 'react'
import NavBar from '../components/Navbar'
import Products from '../components/Products'
import http from '../services/axios'
export const Home = () => {
  const [produtos, productsState] = React.useState([]);
  const [initialProductsList, setInitialProductsList] = React.useState([]) 
  useEffect(() => {
    http
      .get("/products_list")
      .then((res) => {
        console.log("get products list");
        productsState(res.data);
        setInitialProductsList(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div>
      <NavBar initialProductsList={initialProductsList} produtos={produtos} productsState={productsState}>
      </NavBar>
     <Products produtos={produtos}>
      
     </Products>
    </div>
  )
}


