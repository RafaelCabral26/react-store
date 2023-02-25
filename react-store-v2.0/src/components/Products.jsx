import React from "react";

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
