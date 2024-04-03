import axios from "axios";
import { useState } from "react";

const uri = "http://localhost:8001/articles/";

export function Nav({funcion}) {

  const [url_image, setUrl] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [precio, setPrecio] = useState(null);
  const [categoria, setCategoria] = useState(null);
      
  const insertArticle = async () => {
    let formulario = document.getElementById("formulario");

    let form = new FormData(formulario);

    try {
       await axios.post(uri,{
        url_image: url_image,
        titulo: titulo,
        descripcion: descripcion,
        precio: precio,
        categoria: categoria
       });

     
       funcion();
      
    } catch (error) {
      
      alert('Ooops hubo un error!'+error.message);
      console.log('el error es: '+error);
    }
     

     


  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <i style={{ fontSize: "30px" }} className="fa-brands fa-apple"></i>
          &nbsp;&nbsp;App Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Categorias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Smartphones
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Soluciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Reparaciones
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Ayuda
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Contacta con nosotros
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#createModal"
                
              >
                <i className="fa-solid fa-plus"></i>&nbsp;&nbsp;Añadir producto
              </button>
            </li>
            <li className="d-flex">
              <i
                style={{ fontSize: "25px", margin: "5px" }}
                className="fa-solid fa-cart-plus"
              ></i>{" "}
              <div className="circle">1</div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Buscar producto.."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        id="createModal"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg bg-warning">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Crear producto
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="" className="form form-control" id="formulario">
                <label htmlFor="url_image">Url imagen:</label>
                <input
                  type="text"
                  placeholder="url imagen representativa"
                  className="form-control"
                  name="url_image"
                  id="url_image"
                  onChange={(e) => setUrl(e.target.value)}
                />

                <label htmlFor="titulo">Titulo producto:</label>
                <input
                  type="text"
                  placeholder="titulo del producto..."
                  className="form-control"
                  name="titulo"
                  id="titulo"
                  onChange={(e) => setTitulo(e.target.value)}
                />
                <label htmlFor="descripcion">Descripcion</label>
                <textarea
                  name="descripcion"
                  id="descripcion"
                  cols="30"
                  rows=""
                  placeholder="Descripcion del producto..."
                  className="form-control"
                  onChange={(e) => setDescripcion(e.target.value)}
                ></textarea>

                <label htmlFor="precio">precio del producto</label>
                <input
                  type="number"
                  placeholder="precio producto"
                  className="form-control"
                  name="precio"
                  id="precio"
                  onChange={(e) => setPrecio(e.target.value)}
                />

                <label htmlFor="selector">Categoria</label>
                <select className="form-select" aria-label="Default select example"  name="categoria" id="selector" onChange={(e) => setCategoria(e.target.value)}>
                  <option value="zapatos">zapatos</option>
                  <option value="blusas">blusas</option>
                  <option value="peluches">peluches</option>
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button type="button" className="btn btn-success" onClick={insertArticle}> 
                Crear producto
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
