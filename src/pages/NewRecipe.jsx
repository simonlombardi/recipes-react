import MultilineTextFields from "../components/Form"
import ResponsiveAppBar from "../components/NavBar"
import Button from '@mui/material/Button';
import '../App.css'
import { useContext, useState } from "react";
import { RecetasContext } from "../context/RecetasContext";

const NewRecipe = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {agregarReceta} = useContext(RecetasContext)
    const [message, setMessage] = useState(false)

    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }
    const handleCreate = () => {
        if (title === '' && description === ''){
        }
        else{
            const nuevaReceta = {
                id: Date.now(),
                title: title,
                description: description
            }
            agregarReceta(nuevaReceta)
            setMessage(true)
            setTitle('')
            setDescription('')
            setTimeout(() => {
                setMessage(false)
            }, '2000')
        }
    }
    return(
        <>
            <ResponsiveAppBar />
            <div className="principal-container">
                <div className="form-container">
                    <h2 style={{marginBottom:'5px'}}>¡Agrega una receta!</h2>
                    <MultilineTextFields multiline={false} rows={0} label={'Título'} input={title} handleInput={handleChangeTitle}/>
                    <MultilineTextFields multiline={true} rows={5} label={'Descripción'} input={description} handleInput={handleChangeDescription}/>
                    <Button style={{backgroundColor:'#8AA37B'}} onClick={handleCreate} variant="contained">Crear Receta</Button>
                    {message && <h3 style={{marginTop:'10px'}}>¡Receta creada!</h3>}
                </div>
            </div>
        </>
    )
}
export default NewRecipe    