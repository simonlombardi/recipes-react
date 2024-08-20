import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [])
    const [isAuth, setIsAuth] = useState(false)

    const register = (user, pass) => {
        if (users.find((u) => u.user === user)) {
            throw new Error("el nombre de usuario ingresado ya esta en uso");
        }
        else{
            const newUser = {
                id: Date.now(),
                user: user,
                password: pass
            }
            setUsers(...users, newUser)
        }
    }
    const login = (user, pass) => {

    }
}