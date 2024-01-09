import { useState } from "react";

const Inicio = () => {
  
    const [blogs, setBlogs] = useState([
        { titulo: "Mi nueva web", body: "texto para mostrar...", autor: "Andreu", id: 1},
        { titulo: "Fiesta del Ramis", body: "Mucha paella", autor: "Enrique", id: 2},
        { titulo: "Técnicas de estudio", body: "Echarle hors", autor: "Irene", id: 3}
    ]);
  
    return (
  <div className="home">
    { blogs.map((blog)=>{
        return(
        <div className="blog-preview" key={ blog.id }>
            <h2>{ blog.titulo }</h2>
            <p>Escrito por { blog.autor }</p>
        </div>)
    }) }
  </div>
  );
};
export default Inicio;
