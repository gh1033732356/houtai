// 这是个人中心
import { Menu, Layout } from 'antd';
import React, { Component } from 'react'
import types from '../less/PersonalCenter.module.less'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import urlLocationNav from '../utils/urlLocationNav'
const { Content, Sider } = Layout;

class PersonalCenter extends Component {
  componentWillMount(){
    urlLocationNav(this)
}
  render() {
    return (
      <Layout className={types.box}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            //   mode="inline"
            //   defaultSelectedKeys={['1']}
            //   defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >

            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </Menu>
        </Sider>
        <div className={types.content}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
        </Content>
        </div>
      </Layout>
    )
  }
}
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
 })(withRouter(PersonalCenter))