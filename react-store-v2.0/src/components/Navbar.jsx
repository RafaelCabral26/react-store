import React from "react";

function NavBar(props) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("produtos");
  const [initialProductState] = React.useState(props.produtos);
  const [openFilter, setOpenFilter] = React.useState(false);
  const [perfil, setPerfil] = React.useState(1);

  const handleQuery = (e) => {
    if (e.target.value == ""){
      return props.productsState(initialProductState)
    }
    let result = props.productsState(
    props.produtos.filter(prod => {
        
        if(e.target.value == "") {
          return prod
        }else if(prod.name.toLowerCase().substring(0,3).includes(e.target.value.toLowerCase())) {
      return prod
      }
      return console.log("Nenhum item foi encontrado!");
    })
    
    )
    return result
  }
  const handleSelectedAndInitial = (e) => {    
    setSelected(e.target.value);
    props.productsState(initialProductState);
  };
  const handleFilter = () => {
    props.productsState(
      props.produtos.filter((e) => {
        if (e.group == selected || selected == "produtos") {
          return e;
        }
      })
    );
  };
  const handleDropdownFilter = () => {
    setOpenFilter(!openFilter);
  };
  const handleDropdownSearch = () => {
    setOpen(!open);
  };

  return (
    <nav>
      
      <div className="grid bg-white  grid-flow-col-dense grid-cols-12 justify-around    h-16 text-center font-mono text-2x font-extrabold border-b-4 border-x-2 ">
        <div className=" col-start-1 sm:col-start-2 col-span-2 mt-2 w-40 sm:w-96">
          <img src="src/assets/e-store-logo.svg" alt="logo e-cart" className="w-40" />
        </div>
        <div className="flex col-start-9 md:col-start-7 lg:col-span-5 text-sm justify-center">
          <label className="relative block flex  col-start-9 md:col-start-7 lg:col-span-5 justify-center text-slate-700">
            <input className="w-56 lg:w-96  bg-white sm:block hidden input-field border-2 border-teal-300 focus:border-teal-500" placeholder="Pesquisar..." type="text" onChange={handleQuery} />

            <button className="absolute inset-y-0 right-0 flex items-center pr-3 hidden sm:block">
              <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
            <button className="absolute inset-y-0 right-4  items-center pr-3 block sm:hidden relative " onClick={handleDropdownSearch}>
              <svg className="h-5 w-5 fill-black" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
              </svg>
            </button>
            {open ? <input autoFocus className=" absolute top-6 right-0.5" placeholder="Pesquisar..." onBlur={handleDropdownSearch} /> : null}
          </label>
        </div>
        <select className="m-auto col-start-4 bg-slate-100 text-sm sm:text-sm xl:block hidden  text-slate-500 hover:text-teal-300 rounded-lg" onChange={handleSelectedAndInitial}>
        <option value="produtos" onClick={handleFilter}>
            Produtos
          </option>
          <option value="roupas" onClick={handleFilter}>
            Roupas
          </option>
          <option value="eletronicos" onClick={handleFilter}>
            Eletronicos
          </option>
        </select>
        {perfil == 0 ? (
            <a className="m-auto col-start-10 text-sm sm:text-lg text-slate-500 hover:text-teal-300 hover:underline  border-teal-300 " href={"/login"}>
              Login
            </a>)
            : perfil==1 ? ( <a className="m-auto col-start-10 text-sm sm:text-lg text-slate-500 hover:text-teal-300 hover:underline  border-teal-300 " href={"/admin"}>
        Admin
      </a>) : null
        }
        <span className="m-auto col-start-12 md:col-start-11 ">
          <img src="src/assets/cart-svgrepo-com.svg" alt="" className="w-10" />
        </span>
        
        <button className="block sm:hidden col-start-7" onClick={handleDropdownFilter}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
            />
          </svg>
        </button>
        {openFilter ? (
          <select
            className="appearance-none m-auto col-start-4 bg-slate-100 text-sm sm:text-2xl   text-slate-500 hover:text-teal-300 rounded-lg"
            onChange={handleSelectedAndInitial}
            onBlur={handleDropdownSearch}
          >
            <option value="">Selecione item...</option>
            <option className="" value="produtos" onClick={handleFilter}>
              Produtos
            </option>
            <option value="roupas" onClick={handleFilter}>
              Roupas
            </option>
            <option value="eletronicos" onClick={handleFilter}>
              Eletronicos
            </option>
          </select>
        ) : null}
      </div>
    </nav>
  );
}

export default NavBar;
