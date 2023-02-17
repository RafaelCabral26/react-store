import React from "react";
export const products = [
  {
    name:"Celular",
    price:"900,00",
    description:"celular lorem ipsum",
    discount:"0",
    photo:"https://dummyimage.com/250x250/5eead4/fff.jpg&text=Celular",
    group:"eletronicos"
  },
  {
    name:"Computador",
    price:"2000,00",
    description:"Computador lorem ipsum",
    discount:"0",
    photo:"https://dummyimage.com/250x250/5eead4/fff.jpg&text=Computador",
    group:"eletronicos"
  },
  {
    name:"Chinelo",
    price:"50,00",
    description:"chinelo lorem ipsum",
    discount:"0",
    photo:"https://dummyimage.com/250x250/5eead4/fff.jpg&text=Chinelo",
    group:"roupa"
  },
  {
    name:"Camisa",
    price:"100,00",
    description:"camisa lorem ipsum",
    discount:"0",
    photo:"https://dummyimage.com/250x250/5eead4/fff.jpg&text=Camisa",
    group:"roupa"
  },
  {
    name:"Tablet",
    price:"1200,00",
    description:"tablet lorem ipsum",
    discount:"0",
    photo:"https://dummyimage.com/250x250/5eead4/fff.jpg&text=Tablet",
    group:"eletronicos"
  },
  {
    name:"Calça",
    price:"200,00",
    description:"calça lorem ipsum",
    discount:"0",
    photo:"https://dummyimage.com/250x250/5eead4/fff.jpg&text=Calça",
    group:"roupa"
  },

]
function Product(props) {

 
 return (

  <div className="shrink-0 w-24 sm:w-auto sm:h-96">
      <div className="text-slate-500 border-2 rounded-lg my-10 md:my-32 group">
        <div className="">
          <img src={props.produto.photo} alt="product image" />
        </div>
        <p className="text-slate-600">{props.produto.name}</p>
        <p className="text-slate-600">
          <span className="text-slate-600">R$</span>{props.produto.price} </p>
        <a href="#" className="hidden group-hover:block">
          <div className="text-slate-400">{props.produto.description}</div>
        </a>
      </div>
    </div>
  );
}

function Products(props) {
  return (
    <section className="flex flex-wrap justify-center mx-50 sm:mx-50 xl:mx-96 gap-4">
      { props.produtos.map((produto) => {
    return <Product key={produto.name} produto={produto}></Product>
  })}
    </section>
  );
}

export default Products;
