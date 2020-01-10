import React,{Component} from 'react';
import {Form,Input,Button,Icon,Card, message} from 'antd'
import {Registerr} from '../api/user'
import { setItem } from '../utils/webStorage';
import {withRouter,Link} from 'react-router-dom'
import types from '../less/Login.module.less'
class  Register extends Component{
    register=()=>{
        let {validateFields	}=this.props.form
        validateFields((err,data)=>{
            if(err){
                message.error('输入有误请重试')
            }else{
                Registerr(data.userName,data.passWord)
                .then((res)=>{
                    setItem('roots',res)
                    message.success('账号注册成功,正在跳转登陆页面！',()=>{
                        this.props.history.replace('/login')
                    })
                })
                .catch((err)=>{
                        message.error('账户已存在')
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Card className={types.box}>
                <div className={types.login_form}>
                <img src='/loginLogo.png'/><br/>
                <i>Cat Famcoers Club</i>
                <p>北京市宠爱网络科技有限公司</p>
                <Form.Item >
                    {getFieldDecorator('email', {
                        rules: [
                        {
                            type: 'email',
                            message: '请输入正确的邮箱格式!',
                        },
                        {
                            required: true,
                            message: '请输入邮箱!',
                        },
                        ],
                    })(
                    <Input
                    className={types.login_input} 
                    prefix={<Icon type="mail" />}
                    placeholder="请输入邮箱"
                    style={{ color: 'rgba(0,0,0,.25)' }}
                    />)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('userName',{
                            rules: [{ required: true, message: '请输入用户名!' },
                            {max:9,message:'最大字符为9位'},
                            {min:3,message:'最大字符为3位'},
                          ],
                        })(
                            <Input
                            prefix={<Icon type="user" />}
                            placeholder="用户名"
                            className={types.login_input}
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('passWord',{
                            rules: [{ required: true, message: '请输入密码!' },
                            {max:9,message:'最大字符为9位'},
                            {min:3,message:'最大字符为3位'},
                          ],
                        })(
                            <Input
                            prefix={<Icon type="lock"  />}
                            placeholder="密码"
                            className={types.login_input}
                            style={{ color: 'rgba(0,0,0,.25)' }}
                          />
                        )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" onClick={this.register} className={types.login_form_button}>
                       注册 
                    </Button>
                    </Form.Item>
                    <Link to='/login'>已有账号？去登陆</Link>
                </div>
            </Card>
        )
    }
}
export default Form.create({})(withRouter(Register));