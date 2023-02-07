import numStore from "./numStore"
const defaultState = {
    ...numStore.state
}

let reducer = (state = defaultState, action:{type:string,value:number})=>{
    let newState = JSON.parse(JSON.stringify(state))
    // switch(action.type){
    //     case numStore.add1:
    //         numStore.actions.add1(newState,action)
    //         break;
    //     case "add2":
    //         numStore.actions.add2(newState,action)
    //         break;
    //     default:
    //         break;
    // }
    //switch每次增加一个条件就需要手动添加一个case，改用for循环判断
    for(let key in numStore.actions){
        if (action.type === key){
            
            numStore.actions[key](newState,action);
            break;
        }
    }
    return newState
}

export default reducer;