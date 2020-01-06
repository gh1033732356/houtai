import list from './list'
console.log(list)
// listItem 为list列标
// params 为Nav页面要传入的参数
// rootList 为ruturn 出去的参数
const fn = (listItem,params,rootList)=>{
  if(params.indexOf(listItem.id) === -1){
    // 第一级没有找到id， 查找children
    if(listItem.children){
        let tem = [...listItem.children]
        // 把children 为空，用来判断其子元素的root
        listItem.children = []
        tem.map((cItem)=>{
            // 判断 子元素时候有root 如何有  push到children属性
            // if(params.indexOf(cItem.id) !== -1 ){
            //     listItem.children.push(cItem)
            // }
            return fn(cItem,params,listItem.children)
            // return listItem
        })
        // 判断children属性是否为空 ， 不为空push父元素到rootlist
        if(listItem.children.length>0){
            rootList.push(listItem)
        }
        return listItem
    }
  }else{
    // root 有第一级id 直接push
    rootList.push(listItem)
  }
}

// 只需要 传入params权限列表 例['1','2','3-1']
export const Rootlist = (params)=>{
  let rootList = []
  list.map((listItem,index)=>{
    fn(listItem,params,rootList)
    return listItem
  })
  console.log(rootList)
  return rootList
}