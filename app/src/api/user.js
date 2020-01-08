import axios from '../utils/axios'
// export const UserLogin=(userName,passWord)=>{
//     return new Promise((resole,reject)=>{
//         axios.post('/hehe/v1/admin/user/login',{userName,passWord})
//         .then((res)=>{
//             if(res.err==0){
//                 resole(res)
//             }else{
//                 reject(res)
//             }
//         })
//         .catch((err)=>{
//             reject(err)
//         })
//     })
// }

// 登陆
export const UserLogin = async (userName,passWord)=>{
    let res = await axios.post('/hehe/v1/admin/user/login',{userName,passWord})
    if(res.err !== 0){
        throw res
    }
    return res
}

// 登出
export const UserLogOut = async (uid)=>{
    let res = await axios.post('/hehe/v1/admin/user/logout',{uid})
    if(res.err !== 0){
        throw res
    }
    return res
}

// 注册
export const Registerr = async (userName,passWord)=>{
    let res = await axios.post('/hehe/v1/admin/user/reg',{userName,passWord})
    if(res.err !== 0){
        throw res
    }
    return res
}
