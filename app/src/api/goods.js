import axios from '../utils/axios'
// 查询列表数据
export const GetList = async (page,pageSize)=>{
    let res = await axios.post('/hehe/v1/admin/food/getFoods',{page,pageSize})
    if(res.err !==0){
        throw res
    }
    return res
}
// 删除列表数据
export const DelGood = async (foodId)=>{
    let res = await axios.post('/hehe/v1/admin/food/delFood',{foodId})
    if(res.err !==0){
        throw res
    }
    return res
}
// 添加数据
// 字段：name,price,img,foodType,desc
export const AddFood = async (obj)=>{   //有很多参数。传一个对象，将对象结构开
  let res = await axios.post('/hehe/v1/admin/food/addFood',{...obj}) 
  if(res.err!==0){
    throw res
  }
  return res 
}
// 修改数据
// 字段：name,price,img,foodType,desc
export const UpdateFood = async (obj)=>{   //有很多参数。传一个对象，将对象结构开
  let data = {...obj}
  data.foodId = data._id
  let res = await axios.post('/hehe/v1/admin/food/updateFood',data) 
  if(res.err!==0){
    throw res
  }
  return res 
}
// 分类查询
// 字段：page,pageSize,foodType,token
export const GetFoodsByType = async (page,pageSize,foodType)=>{   //有很多参数。传一个对象，将对象结构开
  let res = await axios.post('/hehe/v1/admin/food/getFoodsByType',{page,pageSize,foodType}) 
  if(res.err!==0){
    throw res
  }
  return res 
}
// 关键字查询
// 字段：page,pageSize,kw,token
export const GetFoodsByKw = async (page,pageSize,kw)=>{   //有很多参数。传一个对象，将对象结构开
  let res = await axios.post('/hehe/v1/admin/food/getFoodsByKw',{page,pageSize,kw}) 
  if(res.err!==0){
    throw res
  }
  return res 
}