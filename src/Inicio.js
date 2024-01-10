import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Inicio = () => {
  const [blogs, setBlogs] = useState([
    {
      titulo: "Mi nueva web",
      body: "texto para mostrar...",
      autor: "Andreu",
      id: 1,
    },
    {
      titulo: "Fiesta del Ramis",
      body: "Mucha paella",
      autor: "Enrique",
      id: 2,
    },
    {
      titulo: "Técnicas de estudio",
      body: "Echarle horas",
      autor: "Irene",
      id: 3,
    },
  ]);

  const [nombre, setNombre] = useState("Pepito");

  const handleEliminarBlog = (id) => {
    const nuevoBlog = blogs.filter(blog => blog.id !== id);
    setBlogs(nuevoBlog);
  };

  useEffect(() => {
    console.log("useEffect disparado");
    console.log(blogs);
  }, [nombre, handleEliminarBlog]);

  return (
    <div className="home">
      <BlogList blogs = { blogs }  titulo = "Listado completo de blogs" handleEliminarBlog = { handleEliminarBlog } />
      <p>{ nombre }</p>
      <button onClick={() => setNombre("Alba")}> Cambio de nombre </button>
    </div>
  );
};

export default Inicio;