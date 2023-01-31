import {lazy} from "react"
import Home from "@/views/Home";
// import About from "@/views/About";
import {Navigate} from "react-router-dom"
import Page1 from "../views/page1";
import Page2 from "../views/page2";
import Page301 from "../views/page301"
import LoginPage from "@/views/login/loginPage";
// const About = lazy(()=>import("../views/About"))
// const Page1 = lazy(()=>import("../views/page1"))
// const Page2 = lazy(()=>import("../views/page2"))
// const Page301 = lazy(()=>import("../views/page301"))

const routes = [
    {
        path:"/",
        element:<Navigate to="/page1" />
    },
    {
        Path:'/',
        element:<Home />,
        children:[
            {
                path:"/page1",
                element:<Page1 />
            },
            {
                path:"/page2",
                element:<Page2 />
            },
            {
                path:"/page3/page301",
                element:<Page301 />
            }
        ]
    },
    {
        path:"/login",
        element:<LoginPage />
    },
    {
        path:"*",
        element:<Navigate to="/page1" />
    }
]

export default routes;