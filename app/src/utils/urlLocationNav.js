export default function urlLocationNav(_this){
    const hash = window.location.hash
    let adminArr = '#/admin/'
    // 获取adminArr 长度
    let adminIndex = adminArr.length
    // 截取hash '#/admin/'之后的字符
    const signString = hash.substring(adminIndex)
    // 后的数组
    const signArrB = signString.split('/')
    _this.props.changeHash(signArrB)
}