import { createContext, useState, useEffect } from "react";

export const RecetasContext = createContext()

export const RecetasProvider = ({ children }) => {
    const [recetas, setRecetas] = useState(localStorage.getItem('recetas') ? JSON.parse(localStorage.getItem('recetas')) : [])

    useEffect(() => {
      localStorage.setItem('recetas', JSON.stringify(recetas));
    }, [recetas]);

    const agregarReceta = (nuevaReceta) => {
        setRecetas([...recetas, nuevaReceta])
        console.log(recetas);
        
    }
    const eliminarReceta = (idReceta) => {
      const recetasFiltradas = recetas.filter((receta) => receta.id !== idReceta)
      setRecetas(recetasFiltradas)
    }

    return (
    <RecetasContext.Provider value={{ recetas, agregarReceta, eliminarReceta }}>
      {children}
    </RecetasContext.Provider>
    )
}
