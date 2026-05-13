import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // ← CAMBIA QUI
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <HashRouter>
      {' '}
      {/* ← CAMBIA QUI */}
      <App />
    </HashRouter>
  </React.StrictMode>
)

reportWebVitals()
