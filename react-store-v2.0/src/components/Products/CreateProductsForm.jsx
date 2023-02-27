import React from "react";
import { Breadcrumb } from "flowbite-react";
import http from "../../services/axios"
export const CreateProductsForm = (props) => {

    const [productState, setProductState] = React.useState({
        name: "",
        price: "",
        description: "",
        group: "",
        photo: "url",
      });
      const handleProductData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setProductState((previousData) => {
          console.log(name, value);
          return { ...previousData, [name]: value };
        });
      };
      
      function submitProductData(e) {
        e.preventDefault();
        const newProduct = JSON.stringify(productState);
        console.log(newProduct);
        http
          .post("/create_product/", newProduct)
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      } 
    return (
        <form className="my-28 col-start-5 col-span-5 border-2 rounded-lg mx-auto p-6 shadow-2xl">
        <Breadcrumb className="my-2 text-slate-500">
          Produtos
          <Breadcrumb.Item>
            <span className="text-base"> Criar</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <select className="select select-bordered w-full max-w-xs" defaultValue={"group"} name="group" onChange={handleProductData}>
          <option disabled value={"group"}>
            Categorias
          </option>
          <option name="group" value="eletronicos">
            Eletrônicos
          </option>
          <option name="group" value="roupas">
            Roupas
          </option>
        </select>
        <div className="form-control m-0 w-full max-w-xs">
          <label className="label">
            <span className="label-text">Nome do produto</span>
          </label>
          <input type="text" placeholder="Nome..." name="name" className="input input-bordered w-full max-w-xs" onChange={handleProductData} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Preço</span>
          </label>
          <label className="label input-group">
            <input type="number" min="0.00" max="10000.00" step="0.01" placeholder="Preço..." name="price" className="input input-bordered w-full max-w-xs" onChange={handleProductData} />
            <span>R$</span>
          </label>
        </div>
        <textarea placeholder="Descrição do Produto" name="description" className="textarea textarea-bordered textarea-md my-4  w-full max-w-xs" onChange={handleProductData}></textarea>
        <div className="form-control m-0 w-full max-w-xs">
          <button type="submit" className="btn btn-primary" onClick={submitProductData}>
            Criar Produto
          </button>
        </div>
      </form>
    )
}