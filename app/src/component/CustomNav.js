import React from 'react';
import { Menu, Icon } from 'antd';
import {Link,withRouter} from 'react-router-dom'
import {Rootlist} from '../root/rootList'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
const { SubMenu } = Menu;
let propsUser = JSON.stringify({key:"1",keychild:'1'})
class CustomNav extends React.Component{
    constructor(){
        super()
        this.state={
            list:[],
            keyItem:[],
            selectedKeys:['1']
        }
    }
    componentDidMount(){
        // let arr = Rootlist
        // if(!getItem('token')){
        //     return this.props.history.push('/login')
        // }
        // let brr = getItem('token').root || []
        let brr = ['1','2','3','4']
        let list = Rootlist(brr)
        this.setState({list:list})
    }
    componentWillReceiveProps(props){
        if(propsUser !== JSON.stringify(props.UserKeys)){
            this.setState({keyItem:[props.UserKeys.key],selectedKeys:[props.UserKeys.keychild]})
            propsUser = JSON.stringify(props.UserKeys)
        }
    }
    renderMenuItem(item){
        if(item.children){
            return  <SubMenu
            key={item.id}
            title={
                <span>
                <Icon type={item.icon||'setting'} />
                <span>{item.name}</span>
                </span>
            }
            >
                {item.children.map((childItem,childIndex)=>{
                    if(childItem.children){
                        return this.renderMenuItem(childItem)
                    }else{
                        return <Menu.Item key={childItem.id}>
                             <Link to={'/admin'+childItem.path}>
                            {childItem.name}
                            </Link>
                            </Menu.Item>
                    }
                })}
            </SubMenu>
        }else{
        return  <Menu.Item key={item.id}>
                        <Link to={'/admin'+item.path}>
                        <span>
                            <Icon type={item.icon} />
                            <span>{item.name}</span>
                        </span>
                        </Link>
                    </Menu.Item>
        }      
    }
    render(){
        return(
        <Menu style={{  }}  theme="dark" 
        // defaultSelectedKeys={['1']} defaultOpenKeys={['1']} 
        mode="inline"
            openKeys={this.state.keyItem}
            selectedKeys={this.state.selectedKeys}
            onOpenChange={(item)=>{
                console.log(item)
                this.setState({keyItem:item})
            }}
            onSelect={(item)=>{
                console.log(item.key)
                this.setState({selectedKeys:[item.key]})
            }}
        >
            {/* this.props.UserKeys.keychild */}
            {this.state.list.map((item,index)=>{
              return  this.renderMenuItem(item)
            })}
        </Menu>
        )
    }
}
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
  })(withRouter(CustomNav))
// class Nav extends React.Component{
//     render(){
//         return(
//             <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
//             <SubMenu
//               key="sub1"
//               title={
//                 <span>
//                   <Icon type="user" />
//                   <span>User</span>
//                 </span>
//               }
//             >
//               <Menu.Item key="3">Tom</Menu.Item>
//               <Menu.Item key="4">Bill</Menu.Item>
//               <Menu.Item key="5">Alex</Menu.Item>
//             </SubMenu>
//             <SubMenu
//               key="sub2"
//               title={
//                 <span>
//                   <Icon type="team" />
//                   <span>Team</span>
//                 </span>
//               }
//             >
//               <Menu.Item key="6">Team 1</Menu.Item>
//               <Menu.Item key="8">Team 2</Menu.Item>
//             </SubMenu>
//           </Menu> 
//         )
//     }
// }

// export default Nav
