import state from  './state'
import * as types from  './action-types'
export default (prevState=state,actions)=>{
   let newData =JSON.parse(JSON.stringify(prevState))  
   let {type,params} = actions
   switch (type) {
    //  例
    //  case types.SET_TOKEN_MODAL:
    //     newData.tokenModal=params
    //    break;
   
     default:
       break;
   }
   console.log('修改后的数据')
   return newData
}