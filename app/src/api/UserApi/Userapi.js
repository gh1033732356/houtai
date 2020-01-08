import axios from '../../utils/axios'
// 例子
// export const loginAxios = async (us,ps)=>{
//     let res = await axios.post('/hehe/user/login',{us,ps})
//     if(res.err != 0){
//         throw res
//     }
//     return res
// }

// 用户相关接口
// 1：查询接口
export const FoodList = async (userName='roots',passWord='123')=>{
    let res = await axios.post('/hehe/v1/admin/root/list',{userName,passWord})
    if(res.err !== 0){
        throw res
    }
    return res
}
// 2：添加接口
export const FoodAdd = async (userName,passWord)=>{
    let res = await axios.post('/hehe/v1/admin/root/add',{userName,passWord})
    if(res.err !== 0){
        throw res
    }
    return res
}
// 3：删除接口
export const FoodDel = async (uid)=>{
    let res = await axios.post('/hehe/v1/admin/root/del',{uid})
    if(res.err !== 0){
        throw res
    }
    return res
}
// 4：修改接口
export const FoodUpdate = async (uid,rootLevel,userName,passWord)=>{
    let res = await axios.post('/hehe/v1/admin/root/update',{uid,rootLevel,userName,passWord})
    if(res.err !== 0){
        throw res
    }
    return res
}