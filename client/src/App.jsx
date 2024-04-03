import { useState, useEffect } from "react";
import Axios from "axios";
import { Products } from "./components/products.jsx";
import "./App.css";
// import { useFetch } from "./useFetch.jsx";
import { Crearproduct } from "./components/createProducto.jsx";
import ComponentShowArticles from "./useFetch.jsx";
import {Modal} from "./components/modal.jsx";



function App() {
  // const { data } = useFetch("https://fakestoreapi.com/products");

  return (
    <>
      
      
      <ComponentShowArticles></ComponentShowArticles>
      
    </>
  );
}

export default App;
