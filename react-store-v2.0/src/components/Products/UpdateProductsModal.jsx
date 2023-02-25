import React from "react";
import http from "../../services/axios";
export const ProductsModal = (props) => {
  const selectedProduct = props.selectedProductModal.product;
  const [updatedProductData, setUpdatedProductData] = React.useState({
    _id: selectedProduct._id,
    name: selectedProduct.name,
    price: selectedProduct.price,
    group: selectedProduct.group,
    description: selectedProduct.description,
  });
  function handleEditProduct(e) {
    const name = e.target.name;
    const value = e.target.value;
    setUpdatedProductData(() => {
      return { ...updatedProductData, [name]: value };
    });
  }
  function submitUpdatedProduct(e) {
    e.preventDefault();
    const newProduct = JSON.stringify(updatedProductData);
    http.patch("/update_product", newProduct)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className=" w-full h-full fixed top-0 left-0 bg-transparent  backdrop-blur-sm z-20 top-0 grid grid-cols-8 grid-rows-6">
      <form className="bg-white flex flex-col border-2 rounded-xl my-20  shadow-2xl m-auto col-start-4 col-span-2 w-full px-4 row-span-5 relative">
        <h1 className="self-center text-slate-500 text-3xl my-6">Alterar Produto</h1>
        <hr />
        <label className="m-1" htmlFor="name">
          Nome
        </label>
        <Indicator name={selectedProduct.name}></Indicator>
        <input onChange={handleEditProduct} className="input-field" type="text" defaultValue={selectedProduct.name} name="name" id="name" autoFocus required />

        <label className="m-1" htmlFor="price">
          Preço
        </label>
        <Indicator name={selectedProduct.price}></Indicator> 
        <input className="input-field" type="text" defaultValue={selectedProduct.price} name="price" id="price" onChange={handleEditProduct} required />

        <label className="m-1" htmlFor="group">
          Categoria
        </label>
        <Indicator name={selectedProduct.group}></Indicator> 
        <input className="input-field" type="text" defaultValue={selectedProduct.group} name="group" id="group" onChange={handleEditProduct} required />
        <label htmlFor="description">Descrição</label>

        <textarea name="description" id="description" className="textarea textarea-primary my-6" defaultValue={selectedProduct.description} onChange={handleEditProduct}></textarea>

        <button type="submit" className="btn btn-primary" onClick={submitUpdatedProduct}>
          Atualizar Produto
        </button>
      </form>
    </div>
  );
};


const Indicator = (props) => {
  return (
  <span className="indicator-item badge badge-primary self-end">{props.name}</span> 
  )
}