import React,{ Component } from "react";
import { Table ,Pagination, Button, message,Popconfirm, Spin,Drawer, Input} from 'antd';
import {GetList,DelGood,GetFoodsByType,GetFoodsByKw} from '../../api/goods'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Update from './update'
import style from './goods.module.less'
// import data from './data'
// import columns from './columns'
class List extends Component{
  constructor(){
    super()
    this.state={
      searchId:1,
      drawerState:false, //修改---抽屉的状态值
      updateData:{} , // 要修改的数据
      nowPage:1,
      total:0,
      pageSize:5,
      spinning:false,   //Spin---加载中的状态值
      foodType:'', //类型
      kw:'',  //关键字
      data:[],
      columns:[
        {
          title: 'ID',
          dataIndex: '_id',
          key: '_id',
          width:220
        },
        {
          title: '名称',
          dataIndex: 'name',
          key: 'name',
          width:150
        },
        {
          title: '价格',
          dataIndex: 'price',
          key: 'price',
          width:100
      
        },
        {
          title: '类型',
          dataIndex: 'foodType',
          key: 'foodType',
          width:120
      
        },
        {
          title: '图片',
          dataIndex: 'img',
          key: 'img',
          width:110,
          // height:100,
          render(data){
            return(
              <img src={data} width='80' height='80' alt='图片'/>
            )
          }
        },
        {
          title: '描述',
          dataIndex: 'desc',
          key: 'desc',
          width:230
      
        },
        {
          title: '操作',
          key: 'action',
          width:120,
          // dataIndex:'_id', 
          render:(record)=>{  
            // console.log('record',record);
            //可以获取当前数据的相关内容，如果有dataIndex，则参数就是dataIndex关联的内容
            // 如果没有，就显示所有内容
            return(
              <div>
                <Popconfirm
                title='你确定要删除吗'
                onConfirm = {()=>{
                  this.del(record._id)
                }}
                onCancel={()=>{
                  message.info('取消删除')
                }}
                okText='删除'
                cancelText='取消'
                >
                  <Button size='small' type='danger' icon='delete'>删除</Button>
                </Popconfirm><br/><br/>
                <Button size='small' onClick={()=>{
                  console.log('要修改的数据',record);
                  //点击修改的时候：1.出现抽屉，2.将要修改的数据赋值给原始数据
                  this.setState({drawerState:true,updateData:record}) 
                }} type='primary' icon='edit'>修改</Button>
              </div>
            )
          }
        }
      ]
    }
  }
  componentDidMount(){
    this.getTableData(this.state.nowPage,this.state.pageSize)
    const hash = window.location.hash
    let adminArr = '#/admin/'
    // 获取adminArr 长度
    let adminIndex = adminArr.length
    // 截取hash '#/admin/'之后的字符
    const signString = hash.substring(adminIndex)
    // 后的数组
    const signArrB = signString.split('/')
    this.props.changeHash(signArrB)
  }
  getTableData(nowPage,pageSize){
    this.setState({spinning:true})  //loading的显示隐藏
    console.log('cai')
    GetList(nowPage,pageSize)  //nowPage--就是当前页码，在接口里面是page
    .then((res)=>{
      console.log(res);
      let {foods,allCount} = res.list
      this.setState({spinning:false,data:foods,total:allCount,nowPage,pageSize})
    })
  }
//全部
all(){
  this.getTableData()
}
 //删除
 del(id){
  DelGood(id)
  .then((res)=>{
    console.log(res);
    this.getTableData()

  })
  console.log('删除id',id);
 }
 // 分类查询
 byType(nowPage,pageSize,foodType){
  this.setState({spinning:true})
  GetFoodsByType(nowPage,pageSize,foodType)
  .then((res)=>{
    console.log('分类',res);
    let {foods,allCount} = res.list
    this.setState({spinning:false,data:foods,total:allCount,searchId:2})

  })
 }
 // 关键字查询
 byKw(nowPage,pageSize,kw){
  this.setState({spinning:true})
  GetFoodsByKw(nowPage,pageSize,kw)
  .then((res)=>{
    console.log('关键字',res);
    let {foods,allCount} = res.list
    this.setState({spinning:false,data:foods,total:allCount,searchId:3})
  })
 }
 //数据
 closeDrawer=()=>{
    // 1.关闭抽屉
    // 2.更新数据 
    this.setState({drawerState:false})
    // this.getTableData(this.nowPage,this.pageSize)
 }
  render(){
    let {columns,spinning,updateData,data,total,nowPage,pageSize,foodType,kw} = this.state
    return(
      <div className={style.list}>
        {/* 加载中 */}
        <Spin spinning={spinning} size='large' tip='加载中....'>  
          <div className={style.type}>
          分类查询：<p ><Input type='text' value={foodType} placeholder='请输入商品类型' onChange={(e)=>{
              let value = e.target.value
              this.setState({foodType:value})
            }}/></p>
            <Button type='primary' icon='search' onClick={()=>{
              this.byType(nowPage,pageSize,foodType)
            }}></Button>
          关键字查询：<p ><Input type='text' value={kw} placeholder='请输入关键字' onChange={(e)=>{
              let value = e.target.value
              this.setState({kw:value})
            }}/></p>
            <Button type='primary' icon='search' onClick={()=>{
              this.byKw(nowPage,pageSize,kw)
            }}></Button>
            <Button type='primary' onClick={()=>{
              this.all(nowPage,pageSize)
            }}>全部</Button>
          </div>
          <Table  scroll={{y:360,x:200}} columns={columns} dataSource={data} rowKey='_id' pagination={false} bordered></Table>
        </Spin>
        {/* 分页 */}
        <Pagination  total={total} pageSize={pageSize} onChange={(nowPage,pageSize)=>{
          // 请求下一页数据
          // 自带参数 nowPage---点击的哪一页  pageSize--总页数，  total---分页上显示的总页数
          // console.log(nowPage,pageSize);
          let {foodType,kw} = this.state
          switch (this.state.searchId) {
            case 1:
              this.getTableData(nowPage,pageSize)  
              break;
            case 2:
              this.byType(nowPage,pageSize,foodType)  
              break;
            case 3:
              this.byKw(nowPage,pageSize,kw)  
              break;
            default:
              break;
          }
          this.setState({nowPage,pageSize})
        }}/>
        {/* 抽屉  */}
        <Drawer className={style.uDrawer}
          title="商品修改"
          placement="right"
          width='350'
          // closable={}
          onClose={()=>{this.setState({drawerState:false})}}
          visible={this.state.drawerState}
        >
         {/* props传参的方式将要修改的顺序传给组件 */}
          <Update  closeDrawer={this.closeDrawer} updateData={updateData} getTableData={this.getTableData.bind(this)}  nowPage={nowPage} pageSize={pageSize} className={style.update}></Update>
        </Drawer>
      </div>
    )
  }
}
// export default List
export default connect(state=>state,(dispatch)=>{
  return bindActionCreators(ActionCreactor,dispatch)
})(withRouter(List))