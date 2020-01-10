//个人中心
import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
class UserCore extends Component{
    componentWillMount(){
        const hash = window.location.hash
        let adminArr = '#/admin/'
        // 获取adminArr 长度
        let adminIndex = adminArr.length
        // 截取hash '#/admin/'之后的字符
        const signString = hash.substring(adminIndex)
        // 后的数组
        const signArrB = signString.split('/')
        this.props.changeHash(signArrB)
    }
    render(){
        return(
            <h1>个人中心</h1>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
 })(withRouter(UserCore))
