import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {FirebaseProvider} from "./context/Firebase"

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  <FirebaseProvider>
    <App />
    </FirebaseProvider>
  </React.StrictMode>,
)
