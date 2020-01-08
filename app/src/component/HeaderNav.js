import React ,{Component} from  'react'
import  {withRouter} from 'react-router-dom'
import {Dropdown,Menu,Icon} from 'antd'
import {clear,getItem} from '../utils/webStorage'
import {UserLogOut} from '../api/user'

import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
let arr=[ {name:"个人中心",icon:'setting',id:1},
          {name:'个人设置',icon:'setting',id:2},
          {name:'退出登录',icon:'setting',id:3}
]
class HeaderNav extends Component{
  jump(id){
    switch (id) {
      case 1:
        this.props.history.push('/admin/personalcenter/UserCore')
        // 4-1
        // console.log(this.props)
        this.props.UserKey({key:'4',keychild:'4-1'})
        break;
      case 2:
        this.props.history.push('/admin/personalcenter/setup')
        // 4-2
        this.props.UserKey({key:'4',keychild:'4-2'})
        break;
      default:
        // 退出登录 1调用接口 告诉后端用户退出  2.成功之后 清楚本地缓存 去登录界面
        let uid = getItem('uid')||''
        console.log('123',uid)
        UserLogOut(uid)
        .then((data)=>{
          console.log(data)
          clear()
          this.props.history.replace('/login') 
        })
        break;
    }
  }
  renderMenu(){
    return(
      <Menu>
        {arr.map((item,index)=>{
          return(
            <Menu.Item key={item.id} onClick={this.jump.bind(this,item.id)}>
              <span>
                <Icon type={item.icon}></Icon>
                {item.name}
              </span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
  }
  render(){
    return(
      <Dropdown overlay={this.renderMenu()}>
        <div className="ant-dropdown-link" href="#">
          用户信息 <Icon type="down" />
        </div>
      </Dropdown>
    )
  }
}

// export default withRouter(HeaderNav)
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreactor,dispatch)
})(withRouter(HeaderNav))