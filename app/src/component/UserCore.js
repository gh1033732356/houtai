//个人中心
import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import urlLocationNav from '../utils/urlLocationNav'

class UserCore extends Component{
    componentWillMount(){
        urlLocationNav(this)
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
