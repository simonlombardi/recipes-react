import { useParams } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { RecetasContext } from "../context/RecetasContext"
import CardDetail from "../components/CardDetail"
import ResponsiveAppBar from "../components/NavBar"
const RecipeDetail = () => {
    const {id} = useParams()
    const {recetas} = useContext(RecetasContext)
    const [recipe, setRecipe] = useState(null)
    
    useEffect(() => {
        setRecipe(recetas.find(r => {
            r.id === id
            return r}))
    }, [])

    return (
        <>
            <ResponsiveAppBar />
            <div className="principal-container">
                {recipe ? <CardDetail cardTitulo={recipe.title} cardDescription={recipe.description} /> : <h2>Cargando...</h2> }
            </div>
        </>
    )
}

export default RecipeDetail