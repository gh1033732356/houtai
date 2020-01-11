import React,{Component} from 'react';
import { Form, Icon, Input, Button, Card,message } from 'antd';
import types from '../less/Login.module.less'
import {UserLogin} from '../api/user'
import {withRouter,Link} from 'react-router-dom'
import { setItem, getItem } from '../utils/webStorage';
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
// import Register from './Register'
class Login extends Component {
  componentDidMount(){
    if(getItem('token')){
      this.props.history.replace('/admin/home')
    }
    console.log(this.props.RootList())
  }
  login=()=>{
    let {validateFields	}=this.props.form
   

    validateFields((err,data)=>{
      console.log(data)
      if(err){
        message.error('用户输入有误，请重试')
      }else{
// 发起网络请求
       UserLogin(data.userName,data.passWord)
       .then((res)=>{
        //  console.log(res.token)
         setItem('token',res.token)
         setItem('uid',res.uid)
         setItem('roots',res)
         setItem('userName',data.userName)
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
      <Card className={types.box}>
      <div className={types.login_form}>
        <img src='/loginLogo.png'  alt='图片'/><br/>
        <i>Cat Famcoers Club</i>
        <p>北京市宠爱网络科技有限公司</p>
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
              className={types.login_input}
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
              className={types.login_input}
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
const LoginForm =  Form.create({})(withRouter(Login));
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreactor,dispatch)
})(withRouter(LoginForm))