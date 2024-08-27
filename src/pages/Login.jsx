
import { useContext, useState } from "react"
import MultilineTextFields from "../components/Form"
import { AuthContext } from "../context/AuthContext"
import Button from '@mui/material/Button';
import ResponsiveAppBar from "../components/NavBar";

const Login = () => {
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const {login} = useContext(AuthContext)

    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const handleChangePass = (e) => {
        setPassword(e.target.value)
    }
    const handleLogin = () => {
        login(user, password)
    }
    
    return(
        <>
            <ResponsiveAppBar />
            <div className="principal-container">
                <div className="form-container">
                    <h2 style={{marginBottom:'5px'}}>Login</h2>
                    <MultilineTextFields multiline={false} rows={0} label={'Usuario'} input={user} handleInput={handleChangeUser} />
                    <MultilineTextFields multiline={false} rows={0} label={'Contraseña'} input={password} handleInput={handleChangePass} type={'password'} />
                    <Button style={{backgroundColor:'#8AA37B'}} onClick={handleLogin} variant="contained">Inicia Sesión</Button>
                </div>
            </div>
        </>
    )
}

export default Login