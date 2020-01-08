import state from  './state'
import * as types from  './action-types'
export default (prevState=state,actions)=>{
   let newData =JSON.parse(JSON.stringify(prevState))  
   let {type,params} = actions
   switch (type) {
     case types.JT_HASH:
        newData.HashList=params
       break;
     case types.UPDATE_ID:
        newData.Updateres=params
       break;
     case types.TOKEN_SHOW:
        newData.TokenShow=params
       break;
     case types.USER_SZ:
        newData.UserKeys=params
       break;
     default:
       break;
   }
   return newData
}