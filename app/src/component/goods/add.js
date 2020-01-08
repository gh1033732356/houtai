import React,{ Component } from "react";
import {Card , Button, message,Input} from 'antd';
import {AddFood} from '../../api/goods'
import style from './goods.module.less'
class AddList extends Component{
  constructor(){
    super()
    this.state={
      name:'',
      price:'',
      img:null,
      foodType:'',
      desc:''
    }
  }
  upload = () =>{
    let file = this.refs.file.files[0]
    if(!file) return message.info('请先选择图片',1)
    console.log(file);
    //将图片变成base64
    let readObj = new FileReader()
    //监听事件
    readObj.onload=()=>{
      
      console.log('文件读取完毕',readObj.result);
      message.success('图片上传成功！',0.5)
      this.setState({img:readObj.result})
    }
    //读取图片
    readObj.readAsDataURL(file)
  }
  submit= () =>{
    if(!this.state.img) return message.info('请先上传图片',0.5)
    // 发起ajax请求
    AddFood(this.state)
    .then((res)=>{
      console.log(res);
      message.success('图片添加成功！',0.5)
    })
    .catch((err)=>{
      message.error('提交失败-请检查输入是否正确！')  //图片太大---压缩图片网站 tinypng.com
    })
  }
  render(){
    let {name,price,img,foodType,desc} = this.state
    return(
      <Card className={style.addCard}>
        <div className={style.text}>
          <p><Input placeholder='名称：' type='text' value={name} onChange={(e)=>{
              let value = e.target.value
              this.setState({name:value})
            }}/></p>
            <p><Input placeholder='价格：' type='text' value={price} onChange={(e)=>{
              let value = e.target.value
              this.setState({price:value})
            }}/></p>
            <p><Input placeholder='类型：' type='text' value={foodType} onChange={(e)=>{
              let value = e.target.value
              this.setState({foodType:value})
            }}/></p>
            <p><Input placeholder='描述：' type='text' value={desc} onChange={(e)=>{
              let value = e.target.value
              this.setState({desc:value})
            }}/></p>
            {/* <p>图片：<Input placeholder='' type='text' value={img} onChange={(e)=>{
              let value = e.target.value
              this.setState({img:value})
            }}/></p> */}
            <p><input placeholder='图片：' type='file' ref='file'/></p>
        </div>
        <div className={style.image}>
          <div className={style.sImg}>
            缩略图：<img src={this.state.img} href='' alt='' width='200'/>
          </div>
          <div className={style.handel}>
            <Button onClick = {this.upload} >上传</Button>
            <Button onClick = {this.submit } type='primary'>提交</Button>
          </div>
        </div>
        
      </Card>
    )
  }
}
/**
 * 添加功能，给用户提供一个输入内容的页面
 * 获取用户输入信息，受控组件，非受控组件
 * 调用添加的接口
 * 成功之后，
 *   1.关闭当前页面去列表页
 *   2.添加完毕后重复添加
 * 图片上传：
 *   base64
 *   formdata
 */
export default AddList