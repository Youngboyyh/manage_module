import React from 'react'
import ReactDOM from 'react-dom/client'
//style init 
import "reset-css"
//@是绝对路径
import "@/assets/style/global.scss"
import {BrowserRouter} from "react-router-dom"
import App from './App'
// import Router from './router'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
)
