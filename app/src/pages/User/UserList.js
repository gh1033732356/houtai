import React from 'react'
import Hoc from '../Hoc/HocAdmin'
import { Table, Button, Icon, Spin, Modal } from 'antd';
import { FoodList, FoodDel } from '../../api/UserApi/Userapi'
import UserAdd from './UserAdd'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
const { confirm } = Modal
class UserList extends React.Component{
    constructor(){
        super()
        this.state={
            // 是否创建修改框
            show:true,
            // 控制修改框
            visible: false ,
            // 表格列配置描述 columns
            columns: [
                {
                  title: '账号',
                  dataIndex: 'userName',
                  align:'center'
                },
                {
                  title: '密码',
                  dataIndex: 'passWord',
                  align:'center'

                },
                {
                    title: '操作',
                    align:'center',
                    render: (res) => (
                        <span>
                            <Button type='danger' style={ { marginRight:10 } } onClick={this.showDeleteConfirm.bind(this,res)}>
                                <Icon type="delete" theme="filled"/>
                            </Button>
                            <Button type='primary'  onClick={this.showModal.bind(this,res)}><Icon type="edit" theme="filled" /></Button>
                        </span>
                    ),
                }
            ],
            // 表格列内容 formdata
            formdata:[],
            // loading条显示
            loadshow:true
        }
    }
    showModal=(res)=>{
        // 修改全局redux， 由高阶组件Hoc传递过来
        this.props.updateFn(res)
        this.setState({
          visible: true,
          show:false
        });
      };
      // 确认的回调
      handleOk = e => {
        console.log(e);
        FoodList()
        .then((data)=>{
            this.setState({formdata:data.list,loadshow:false})
        })
        .catch((err)=>{
            console.log(err)
        })
        this.setState({
          visible: false,
          show:true
        });
        
      };
      // 取消的回调
      handleCancel = e => {
        console.log(e);
        FoodList()
        .then((data)=>{
            this.setState({formdata:data.list,loadshow:false})
        })
        .catch((err)=>{
            console.log(err)
        })
        this.setState({
          visible: false,
          show:true
        });
      };
    // 删除按钮的触发函数
    showDeleteConfirm(res) {
        let _this = this
        confirm({
          title: '你确定要删除吗?',
          content: '删除后不能回复',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
        // 确认按钮的回调函数
          onOk() { 
            console.log('OK',res);
            const uid = res._id
            // 用户删除接口 
            FoodDel(uid)
              .then(()=>{
                  FoodList()
                    .then((data)=>{
                        console.log(data)
                        _this.setState({formdata:data.list,loadshow:false})
                    })
              })
          },
        // 消除按钮的回调函数
          onCancel() {
            console.log('Cancel');
          },
        });
    }
    componentDidMount(){
        // axios获取列表页
        FoodList()
          .then((data)=>{
              this.setState({formdata:data.list,loadshow:false})
          })
          .catch((err)=>{
              console.log(err)
          })
    }
    render(){
       return(
        <Spin tip="Loading..." spinning={this.state.loadshow}>
          <Table columns={this.state.columns} dataSource={this.state.formdata} rowKey='_id'/>
          {this.state.show || 
          <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
           <UserAdd></UserAdd>
        </Modal>
        }
        </Spin>
        
       )
    }
}
// const UserListForm = Form.create({ name: 'user_List' })(UserList);
export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
})(Hoc(withRouter(UserList)))
