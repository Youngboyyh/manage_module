import React from 'react'
import ReactDOM from 'react-dom/client'
//style init 
import "reset-css"
//@是绝对路径
import "@/assets/style/global.scss"
import {BrowserRouter} from "react-router-dom"
import App from './App'
// import Router from './router'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>

      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>,
  </Provider>

)
