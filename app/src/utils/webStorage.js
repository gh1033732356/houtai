export const getItem=(key)=>{
  // console.log(typeof localStorage.getItem(key))
  // console.log(Object.prototype.toString.call(localStorage.getItem(key)))
  if(typeof localStorage.getItem(key) === 'string'){
    return localStorage.getItem(key)
  }
  return JSON.parse(localStorage.getItem(key))
}
export const setItem=(key,value)=>{
  return localStorage.setItem(key,JSON.stringify(value))
}
export const  clear=()=>{
  localStorage.clear()
}