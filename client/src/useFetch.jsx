import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./components/modal.jsx";
import { Nav } from "./components/nav.jsx";
// export function useFetch(url){

//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         setLoading(true);
//       fetch(url)
//         .then((res) => res.json())
//         .then((data) => {
//             setLoading(false);
//             setData(data)});
//     }, []);

//     return {data, loading};
// }

const uri = "http://localhost:8001/articles/";

const ComponentShowArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles();
  }, []);

  const getArticles = async () => {
    const res = await axios.get(uri);
  
    setArticles(res.data);
  };
  
  const deleteArticle = async (id_article) => {
    await axios.delete(uri + id_article);
    getArticles();
  };
  
  const sendId = (id_article) => {
    document.getElementById("button_cerrar").dataset.id = id_article;
  };

  return (
    <>
    <Nav funcion={getArticles}/>

    <div className="p-5">
      <div className="row">
        {articles?.map((item) => (
          <div className="col-sm-5 mb-3" key={item.id_articulo}>
            <div className="card shadow" id="tarjeta">
              <div></div>

              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <img
                      src={item.url_image}
                      className="card-img-top"
                      alt={item.titulo}
                    />
                  </div>
                  <div className="col">
                    <h5 className="card-title">{item.titulo}</h5>
                    <p className="card-text">{item.descripcion}</p>
                  </div>
                </div>
                <center>
                  <a href="#" className="btn btn-success mt-2" type="button">
                    <i className="fa-solid fa-cart-shopping"></i>&nbsp;&nbsp;
                    <b>$&nbsp;{item.precio}&nbsp;&nbsp;Comprar Ahora!</b>
                  </a>
                </center>

                <div className="btn-group">
                  <a
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        className="dropdown-item"
                        type="button"
                        onClick={() => deleteArticle(item.id_articulo)}
                      >
                        <i
                          className="fa-solid fa-trash"
                          style={{ color: "red" }}
                        ></i>
                        &nbsp;&nbsp;Eliminar
                      </a>
                    </li>
                    <li>
                      <a
                        type="button"
                        className="dropdown-item"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={sendId(item.id_articulo)}
                      >
                        <i
                          className="fa-solid fa-pencil"
                          style={{ color: "green" }}
                        ></i>
                        &nbsp;&nbsp;Modificar
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Modal perro={getArticles}></Modal>
      </div>
      </div>
    </>
  );
};

export default ComponentShowArticles;
