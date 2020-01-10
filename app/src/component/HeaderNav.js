import React ,{Component} from  'react'
import  {withRouter} from 'react-router-dom'
import {Dropdown,Menu,Icon,Avatar,Tag} from 'antd'
import {clear,getItem} from '../utils/webStorage'
import {UserLogOut} from '../api/user'

import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
import style from '../less/conmon.module.less'
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
        // 退出登录 1调用接口 告诉后端用户退出  2.成功之后 清除本地缓存 去登录界面
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
  log1=()=> {}
  log2=()=> {}
  log3=()=> {}
  log4=()=> {}
  userList=()=>{ 
    this.props.history.push('/admin/user/userlist') 
    this.props.UserKey({key:'3',keychild:'3-1'}) 
  }
  useradd=()=>{ 
    this.props.history.push('/admin/user/useradd') 
    this.props.UserKey({key:'3',keychild:'3-2'})
  }
  foodList=()=>{ 
    this.props.history.push('/admin/food/foodlist') 
    this.props.UserKey({key:'2',keychild:'2-1'})
  }
  foodadd=()=>{ 
    this.props.history.push('/admin/food/foodadd') 
    this.props.UserKey({key:'2',keychild:'2-2'})}
  render(){
    return(
      <div className={style.headerNav}>
        <div className={style.tag}>
          <Tag color="orange"  onClose={this.log3} onClick={this.foodList} >商品列表</Tag>
          <Tag color="blue"  onClose={this.log4} onClick={this.foodadd} >商品添加</Tag>
          <Tag color="magenta" closable onClose={this.log1} onClick={this.userList} >用户列表</Tag>
          <Tag color="green" closable onClose={this.log2} onClick={this.useradd} >用户添加</Tag>
        </div>
        <div className={style.user}>
          <Dropdown overlay={this.renderMenu()}>
            <div className="ant-dropdown-link" href="#">
              用户信息 <Icon type="down" />
            </div>
          </Dropdown>
          <div className={style.avatar}>
              <Avatar  src='/user.jpg' onClick={()=>{
                this.props.history.push('/admin/personalcenter/setup')
              }}/>
          </div>
        </div>
        
        
      </div>
      
    )
  }
}

// export default withRouter(HeaderNav)
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreactor,dispatch)
})(withRouter(HeaderNav))