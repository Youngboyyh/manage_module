import App from "@/App";
import Home from "@/views/Home";
import About from "@/views/page301";
import { BrowserRouter, Routes,Route,Navigate } from "react-router-dom";

const Router = ()=>(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* 重定向也就是默认访问home */}
                <Route path="/" element = {<Navigate to="/home" />}></Route>
                <Route path="/home" element= {<Home />}></Route>
                <Route path="/about" element= {<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

export default Router;