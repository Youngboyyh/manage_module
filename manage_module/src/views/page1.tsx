import { useSelector, useDispatch } from "react-redux";
import store from "@/store";
//TS中用returntype来获取函数的类型的返回值
// type RootState = ReturnType<typeof store.getState>
const Page1 = () =>{

    //获取store里面的数据
    const {num} = useSelector((state:RootState)=>({
        num:state.num
    }))
    //修改store里面的数据
    const dispatch = useDispatch()
    const changeStore = ()=>{
        dispatch({type:"add2", value:10})
    }
    return (
        <div>this is page1
            <p>{num}</p>
            <button onClick={changeStore}>点击</button>
        </div>
    )
}

export default Page1;