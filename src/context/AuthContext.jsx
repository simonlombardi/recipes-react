import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const userSesion = sessionStorage.getItem('userSesion')
        if (userSesion){
            setIsAuth(true)
        }
    }, [])


    const register = (user, pass) => {
        if(!user || !pass){
            alert("Ingrese los datos solicitados!")
        }
        else if (users.find((u) => u.user === user)) {
           alert("el nombre de usuario ingresado ya esta en uso");
        }
        else{
            const newUser = {
                id: Date.now(),
                user: user,
                password: pass
            }
            const newListUsers = [...users, newUser]
            setUsers(newListUsers)
            localStorage.setItem('users', JSON.stringify(newListUsers))
            window.location.replace('/login')
        }
    }
    const login = (user, pass) => {
        if (users.length){
            const userFound = users.find((u) => u.user === user && u.password === pass)
            if (userFound) {
                sessionStorage.setItem('userSesion', JSON.stringify(userFound))
                setIsAuth(true)
                window.location.replace('/')
            }
            else{
                alert("Credenciales incorrectas!");
            }
        }
        else{
            alert("No hay usuarios creados");
        }
    }

    const logout = () => {
        sessionStorage.removeItem('userSesion')
        setIsAuth(false)
        window.location.replace('/')
    }

    return(
        <AuthContext.Provider value={{ isAuth, register, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}
