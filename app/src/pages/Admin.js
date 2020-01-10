import React from 'react';
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import { Layout, Breadcrumb, Modal } from 'antd';
import {connect} from 'react-redux'
import SignList from '../root/signList'
import ActionCreactor from '../store/actionCreator'
import CustomNav from '../component/CustomNav'
import styles from '../less/less.module.less'
import HeaderNav from '../component/HeaderNav'
import { clear, getItem } from '../utils/webStorage';
const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component{
  constructor(){
    super()
    this.state = {
      // 侧边栏隐藏
      collapsed: false,
      // 地址栏显示
      signList : SignList,
      signArr: [],
      Itemkey:[],
      ItemkeyChild:[]
    }
  }
  componentDidMount(){
    // this.props.history.push('/admin/home')
    if(!getItem('token')){
      this.props.history.push('/login')
    }
    // const hash = window.location.hash
    // let adminArr = '#/admin/'
    // // 获取adminArr 长度
    // let adminIndex = adminArr.length
    // // 截取hash '#/admin/'之后的字符
    // const signString = hash.substring(adminIndex)
    // // 后的数组
    // const signArrB = signString.split('/')  
    // this.setState({signArr:signArrB})
  }
  // 侧边栏的隐藏
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  // 验证token显示框 是否显示的确定按钮
  handleOk = e => {
    console.log(e);
    // this.props.TokenShowModel(false)
    clear()
    this.props.history.push('/login')
    ActionCreactor.TokenShowModel(false)
  };
  // 验证token显示框 是否显示的确定消失按钮
  handleCancel = e => {
    console.log(e);
    ActionCreactor.TokenShowModel(false)
  };
  render(){
    return(
      <Layout style={{ minHeight: '100vh'}}>
        {/* 侧边栏 */}
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} className='styles.sider'>
              <div className={styles.logo} >
                <img src='/logo3.png' alt=''/>
                <h1>CXK 管理系统</h1>
              </div>
                <CustomNav></CustomNav>
              </Sider>
              
              <Layout>
        {/* 内容框顶部 */}
                <Header className={styles.admin_header}>
                  <div></div>
                  <HeaderNav></HeaderNav>
                </Header>
        {/* 内容部分 */}
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    {this.props.HashList.map((item,index)=>{
                      return <Breadcrumb.Item key={index}>{this.state.signList[item]}</Breadcrumb.Item>
                    })}
                  </Breadcrumb>
                  
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  {this.props.children}
                  </div>
                </Content>
                {/* 尾部 */}
                <Footer style={{ textAlign: 'center' }}>Design ©2020 Created by Cai Xu Kun</Footer>
              </Layout>
          {/* token 弹出层 */}
          <Modal
            title="温馨提示"
            visible={this.props.TokenShow}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
            <p>token缺失,请重新登录</p>
          </Modal>
          {/* 弹出层 */}
        </Layout>
    )
  }
}

// export default withRouter(Admin);
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreactor,dispatch)
})(withRouter(Admin))
