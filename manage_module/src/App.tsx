import { useState } from 'react'
// import Comp1 from "@/components/Comp1"
// import Comp2 from "@/components/Comp2"
// import { Button } from 'antd'
// import { UpCircleOutlined } from '@ant-design/icons'
// import {Outlet,Link} from "react-router-dom"
import {useRoutes,Link} from "react-router-dom"
import router from "./router"
import React from 'react'


function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <div className="App">

{/*         
        <Link to="/home">
          Home
        </Link>
        <Link to="/about">
          About
        </Link> */}
        {/* <Outlet /> */}
        {outlet}


    </div>

  )
}

export default App
