import React from 'react';
import { Layout, Breadcrumb,message } from 'antd';
import CustomNav from '../component/CustomNav'
import styles from '../less/less.module.less'
import HeaderNav from '../component/HeaderNav'
import { setItem, getItem } from '../utils/webStorage';
import {withRouter} from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

class Admin extends React.Component{
  componentDidMount(){
    if(!getItem('token')){
      message.error('请先登录',()=>{
        this.props.history.replace('/login')
      })
    }
  }
  constructor(){
    super()
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render(){
    return(
      <Layout style={{ minHeight: '100vh' }}>
        {/* 侧边栏 */}
              <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo" >
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
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                  </Breadcrumb>
                  <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
                </Content>
                {/* 尾部 */}
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
            </Layout>
    )
  }
}

export default withRouter(Admin);