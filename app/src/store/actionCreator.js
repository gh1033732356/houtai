import * as types from './action-types'
import store from './store'
export default {
  changeHash(params){
    const action = {
        type : types.JT_HASH,
        params : params
    }
    return action  // 改为return
  },
  UpdatePropsRES(params){
    const action = {
        type : types.UPDATE_ID,
        params : params
    }
    return action  // 改为return
  },
  UserKey(params){
    const action = {
        type : types.USER_SZ,
        params : params
    }
    return action  // 改为return
  },
  TokenShowModel(params){
    const action = {
        type : types.TOKEN_SHOW,
        params : params
    }
    store.dispatch(action)  // 改为return
  }
}