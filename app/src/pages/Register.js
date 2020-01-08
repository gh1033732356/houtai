import React,{Component} from 'react';
import {Form,Input,Button,Icon,Card, message} from 'antd'
import types from '../less/Register.module.less'
import {Registerr} from '../api/user'
import { setItem } from '../utils/webStorage';
import {withRouter} from 'react-router-dom'
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
                        this.props.history.replace('/admin/home')
                    })
                })
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <Card>
                <div className={types.register}>
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
                            {min:3,message:'最大字符为3位'},
                          ],
                        })(
                            <Input
                            prefix={<Icon type="passWord" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="密码"
                          />
                        )}
                    </Form.Item>
                    <Form.Item>
                    <Button type="primary" onClick={this.register} className={types.Register_button}>
                       注册 
                    </Button>
                    </Form.Item>      
                </div>
            </Card>
        )
    }
}
export default Form.create({})(withRouter(Register));