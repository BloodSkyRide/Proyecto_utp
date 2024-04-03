
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";

export function Modal({perro}){
  const uri = "http://localhost:8001/articles/";

  const [url, setUrl] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, seprecio] = useState(23.25);
    const [categoria, setCategoria] = useState('prueba de categoria');
    const [titulo, setTitulo] = useState('');
  

  const  updateArticle = async () =>{

    

    let id_article = document.getElementById("button_cerrar").dataset.id;

    try {
       await axios.put(uri+id_article,{

        url_image: url,
        descripcion: descripcion,
        precio: precio,
        titulo: titulo,
        categoria: categoria
       });
       perro();
      
    } catch (error) {
      
      alert(error.message);
    }
    

  }
    return (


<div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header bg bg-warning">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Modificar Articulo</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
          <div className="d-block" id="block_form">
          <label htmlFor="input">Imagen:</label>
          <input type="text" autoComplete="off" className="form-control" placeholder="Ingrese la url que desea modificar"  id="input" onChange={(e) => setUrl(e.target.value)}/>
          </div>
        
        <label htmlFor="input2">Titulo del articulo: </label>
        <input type="text" autoComplete="off" placeholder="Titulo del articulo..."  className="form-control" id="input2" onChange={(e) => setTitulo(e.target.value)}/>

        <label htmlFor="textarea">Descripcion</label>
        <textarea name="textarea" id="textarea" cols="30" rows="3" className="form-control" placeholder="Describe tu articulo" onChange={(e) => setDescripcion(e.target.value)} ></textarea>
        
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" data-id='' id="button_cerrar" >Cerrar</button>
        <button type="button" className="btn btn-success" onClick={updateArticle}><i className="fa-solid fa-floppy-disk"></i>&nbsp;&nbsp;Guardar cambios</button>
      </div>
    </div>
  </div>
</div>

    );
}