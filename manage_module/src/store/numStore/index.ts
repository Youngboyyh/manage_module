export default {
    state:{
        num:20
    },
    actions:{
        add1:(newState:{num:number},action:{type:string}) =>{
            newState.num++;
        },
        add2:(newState:{num:number},action:{type:string,value:number})=>{
            newState.num += action.value;
        }
    },
    //名字的统一化管理
    // actionNames:{
    //     add1:"add1",
    //     add2:"add2"        
    // }


}