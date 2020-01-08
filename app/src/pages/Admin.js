import React from 'react';
import {withRouter} from 'react-router-dom'
import { Layout, Breadcrumb } from 'antd';
import CustomNav from '../component/CustomNav'
import SignList from '../root/signList'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
// import store from '../store/store'
import {connect} from 'react-redux'
import { Modal } from 'antd'
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;


class Admin extends React.Component{
  constructor(){
    super()
    this.state = {
      // 侧边栏隐藏
      collapsed: false,
      // 地址栏显示
      signList : SignList,
      signArr: []
    }
  }
  componentDidMount(){
    const hash = window.location.hash
    let adminArr = '#/admin/'
    // 获取adminArr 长度
    let adminIndex = adminArr.length
    // 截取hash '#/admin/'之后的字符
    const signString = hash.substring(adminIndex)
    // 后的数组
    const signArrB = signString.split('/')
    this.setState({signArr:signArrB})
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  handleOk = e => {
    console.log(e);
    // this.props.TokenShowModel(false)
    ActionCreactor.TokenShowModel(false)
  };

  handleCancel = e => {
    console.log(e);
    ActionCreactor.TokenShowModel(false)
    // this.props.TokenShowModel(false)
  };
  render(){
    return(
      <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" />
                <CustomNav></CustomNav>
              </Sider>
              
              <Layout>
                {/* 内容框顶部 */}
                <Header style={{ background: '#fff', padding: 0 }} >123</Header>
                {/* 内容部分 */}
                <Content style={{ margin: '0 16px' }}>
                  <Breadcrumb style={{ margin: '16px 0' }}>
                    {this.props.HashList.map((item,index)=>{
                      return <Breadcrumb.Item key={index}>{this.state.signList[item]}</Breadcrumb.Item>
                    })}
                  </Breadcrumb>
                  <div style={{ padding: 24, background: '#fff', minHeight: 450 }}>
                    {this.props.children}
                  </div>
                </Content>
                {/* 尾部 */}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>

          <Modal
            title="温习提示"
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