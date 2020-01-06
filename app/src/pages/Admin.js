import React from 'react';
import { Layout, Breadcrumb } from 'antd';
import CustomNav from '../component/CustomNav'
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;


class Admin extends React.Component{
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
                <div className="logo" />
                <CustomNav></CustomNav>
              </Sider>
              
              <Layout>
                {/* 内容框顶部 */}
                <Header style={{ background: '#fff', padding: 0 }} >123</Header>
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

export default Admin;