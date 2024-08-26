import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from '../src/routes/Routes.jsx'
import { RecetasProvider } from './context/RecetasContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <AuthProvider>
      <RecetasProvider>
        <Routes />
      </RecetasProvider>
    </AuthProvider>
)
