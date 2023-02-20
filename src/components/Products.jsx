import React from "react";
export const products = [
  {
    name: "Celular",
    price: "900,00",
    description: "celular lorem ipsum",
    discount: "0",
    photo: "https://dummyimage.com/250x250/5eead4/fff.jpg&text=Celular",
    group: "eletronicos",
  },
  {
    name: "Computador",
    price: "2000,00",
    description: "Computador lorem ipsum",
    discount: "0",
    photo: "https://dummyimage.com/250x250/5eead4/fff.jpg&text=Computador",
    group: "eletronicos",
  },
  {
    name: "Chinelo",
    price: "50,00",
    description: "chinelo lorem ipsum",
    discount: "0",
    photo: "https://dummyimage.com/250x250/5eead4/fff.jpg&text=Chinelo",
    group: "roupa",
  },
  {
    name: "Camisa",
    price: "100,00",
    description: "camisa lorem ipsum",
    discount: "0",
    photo: "https://dummyimage.com/250x250/5eead4/fff.jpg&text=Camisa",
    group: "roupa",
  },
  {
    name: "Tablet",
    price: "1200,00",
    description: "tablet lorem ipsum",
    discount: "0",
    photo: "https://dummyimage.com/250x250/5eead4/fff.jpg&text=Tablet",
    group: "eletronicos",
  },
  {
    name: "Calça",
    price: "200,00",
    description: "calça lorem ipsum",
    discount: "0",
    photo: "https://dummyimage.com/250x250/5eead4/fff.jpg&text=Calça",
    group: "roupa",
  },
];
function Product(props) {
  return (
    <div className=" w-72 bg-base-100 shadow-xl m-2">
      <figure>
        <img src="https://cdn.pixabay.com/photo/2014/04/05/09/30/tablet-314153_960_720.png" alt="" />
      </figure>
      <div className="card-body p-2 pt-3 flex flex-row h-24">
        <div className="card-actions justify-around content-center ">
          <span className="card-title">{props.produto.name}</span>
          <div className=""></div>
        </div>
      </div>
      <button className="btn btn-primary ml-40 mb-4 indicator">
        R${props.produto.price}
        <img src="src/assets/cart-svgrepo-com.svg" alt="" className="w-10 indicator-item" />
      </button>
    </div>
  );
}

function Products(props) {
  return (
    <section className="flex flex-wrap justify-center my-20 xl:mx-96">
      {props.produtos.map((produto) => {
        return <Product key={produto.name} produto={produto}></Product>;
      })}
    </section>
  );
}

export default Products;
