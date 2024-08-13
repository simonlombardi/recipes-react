import ResponsiveAppBar from "../components/NavBar"
import '../App.css'
import { useContext } from "react"
import { RecetasContext } from "../context/RecetasContext"
import BasicCard from "../components/Card"

const Index = () => {
    const {recetas} = useContext(RecetasContext)
    return(
        <>
            <ResponsiveAppBar />
            <div className="principal-container">
                {!recetas.length ? <h1 style={{color:'#6B4226'}}>No hay recetas creadas.</h1> : (
                    recetas.map((receta) => {
                        return <BasicCard key={receta.id} cardId={receta.id} cardTitulo={receta.title} cardDescription={receta.description} />
                    })
                )}
            </div>
        </>
    )
}

export default Index