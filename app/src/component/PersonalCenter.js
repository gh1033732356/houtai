// 这是个人中心
import React,{Component} from 'react'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import urlLocationNav from '../utils/urlLocationNav'
// import { Row, Col } from 'antd';
// const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
class PersonalCenter extends Component{
    componentWillMount(){
        urlLocationNav(this)
    }
    render(){
        return(
            <h1>个人设置</h1>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
 })(withRouter(PersonalCenter))