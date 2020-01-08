import React,{Component} from 'react';
import { Form, Icon, Input, Button, Card,message } from 'antd';
import types from '../less/Login.module.less'
import {UserLogin} from '../api/user'
import {withRouter,Link} from 'react-router-dom'
import { setItem, getItem } from '../utils/webStorage';
// import Register from './Register'
class Login extends Component {
  componentDidMount(){
    if(getItem('token')){
      this.props.history.replace('/admin/home')
    }
  }
  login=()=>{
    let {validateFields	}=this.props.form
    // console.log(getFieldsValue())
    validateFields((err,data)=>{
      if(err){
        message.error('用户输入有误，请重试')
      }else{
// 发起网络请求
       UserLogin(data.userName,data.passWord)
       .then((res)=>{
         setItem('token',res.token)
         setItem('uid',res.uid)
         setItem('roots',res)
        message.success('登陆成功3s跳转首页',()=>{
          this.props.history.replace('/admin/home')
        })
       }) 
       .catch((err)=>{
         message.error(err.msg)
       })
      }
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Card>
      <div className={types.login_form}>
        <Form.Item>
          {getFieldDecorator('userName',{
            rules: [{ required: true, message: '请输入用户名!' },
            {max:9,message:'最大字符为9位'},
            {min:3,message:'最大字符为3位'},
          ],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passWord',{
             rules: [{ required: true, message: '请输入密码!' },
             {max:9,message:'最大字符为9位'},
             {min:3,message:'最大字符为3位'},]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.login} className={types.login_form_button}>
            登    陆  
          </Button>
        </Form.Item>
        {/* <Register></Register> */}
        <Link to='/reg'>还没有账号？去注册</Link>
      </div>
      </Card>
    );
  }
}
export default Form.create({})(withRouter(Login));