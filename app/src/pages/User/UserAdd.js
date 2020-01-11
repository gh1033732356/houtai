import React from 'react'
import Hoc from '../Hoc/HocAdmin'
import { FoodList, FoodAdd, FoodUpdate } from '../../api/UserApi/Userapi'
import { Card, Input, Icon, Form, Cascader, Button, message  } from 'antd';
import type from '../../less/userAdd.module.less'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../../store/actionCreator'
import {connect} from 'react-redux'
class UserAdd extends React.Component{
    constructor(){
        super()
        this.state={
            // 隐藏button提交标签
            show:true,
            // 下拉框选择 options
            options : [
                {
                    value: '9',
                    label: '超级管理员',
                },
                {
                    value: '0',
                    label: '管理员',
                },
            ]
        }
    }
    componentDidMount(){
        // 判断hash值 是否在修改阶段打开
        if(window.location.hash === '#/admin/user/userlist'){
            let userID = this.props.userAdds
            console.log(userID.rootLevel)
            let rootLevels = []
            switch (userID.rootLevel) {
                case 0:
                    rootLevels = ['0']
                    break;
                case 9:
                    rootLevels = ['9']
                    break;

                default:
                    break;
            }
            this.props.form.setFieldsValue({
                'userName': userID.userName ,
                'passWord': userID.passWord ,
                'userRoot': rootLevels
            });
            this.setState({show:false})
        }
    }
    submitAdd(){
        const { validateFields } = this.props.form
        validateFields((errors, values) => {
            console.log(values)
            if(errors){
                message.error('用户输入有误')
            }else{
                let userRoot = values.userRoot[0]
                // axios接口：上传用户接口
                FoodAdd(values.userName,values.passWord,userRoot)
                    .then(()=>{
                        message.success('创建成功')
                        this.props.form.resetFields()
                    })
            }
        });
    }
    submitUpdate(){
        const { validateFields } = this.props.form
        validateFields((errors, values) => {
            console.log(values)
            if(errors){
                message.error('用户输入有误')
            }else{
                let rootLevel = values.userRoot[0]
                let uid = this.props.userAdds
                // axios接口：上传用户接口
                FoodUpdate(uid, rootLevel,values.userName,values.passWord)
                    .then((data)=>{
                        console.log(data)
                        this.props.form.resetFields()
                    })
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
       return(
        <Card>
        <Form.Item className={type.box}>
        {/*  userName input框 */}
            <Form.Item>
            {getFieldDecorator('userName', {
                rules: [
                    { required: true, message: '请输入账号!' },
                    // 自定义，验证信息
                    { validator: (rule, value, callback) => {
                        // axios接口：查询用户
                        if(this.state.show){
                            try{
                                FoodList()
                                .then((data)=>{
                                    data.list.map((item)=>{
                                        // 判断用户名是否存在
                                        if(item.userName === value){
                                           return callback('用户名已存在')
                                        }
                                        return item
                                    })
                                    callback()
                                })
                            }catch(err){
                                callback(err)
                            }   
                        }else{
                            callback()
                        }
                      }
                    },
                ],
            })(
                <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                />,
            )}
            </Form.Item>
        {/*  passWord input框 */}
            <Form.Item>
                {getFieldDecorator('passWord', {
                    rules: [
                        { required: true, message: '请输入密码!' }
                    ],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Paassword"
                    />,
                )}
            </Form.Item>
        {/*  userRoot 下拉框 */}
            <Form.Item>
            {getFieldDecorator('userRoot', {
                    rules: [{ required: true, message: '请选择权限!' }],
            })(
            <Cascader 
                options={this.state.options} 
                placeholder="权限设置" 
                style={{ fontSize:12 }}
                />
            )}
            </Form.Item>
           
                <div>
                {this.state.show?
                    <Button type="primary"  onClick={this.submitAdd.bind(this)} style={{ width:300 }}>
                        添加
                    </Button>
                    :
                    <Button type="primary"  onClick={this.submitUpdate.bind(this)} style={{ width:300 }}>
                        修改
                     </Button>
                }
                </div>
            
        </Form.Item>
        </Card>
       )
    }
}   

const UserAddForm = Form.create({ name: 'user_Add' })(UserAdd);
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
})(withRouter(Hoc(UserAddForm)))