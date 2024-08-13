import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from '../src/routes/Routes.jsx'
import { RecetasProvider } from './context/RecetasContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecetasProvider>
      <Routes />
    </RecetasProvider>
)
