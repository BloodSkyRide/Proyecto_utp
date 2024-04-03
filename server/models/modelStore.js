// importamos la conexion a la base de datos segun el patron
import { DataTypes } from "sequelize";
import db from "../database/db.js";



const Article = db.define('articulos', { 
  id_articulo: {type: DataTypes.INTEGER,primaryKey: true,
    autoIncrement: true},
  titulo: { type: DataTypes.STRING },
  descripcion: { type: DataTypes.TEXT },
  precio: { type: DataTypes.FLOAT },
  url_image: { type: DataTypes.TEXT },
  categoria: { type: DataTypes.STRING },
});

export default Article;
