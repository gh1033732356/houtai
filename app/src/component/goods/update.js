import React,{ Component } from "react";
import { Button, message,Input} from 'antd';
import {UpdateFood} from '../../api/goods'
import style from './goods.module.less'
// import {GetList,DelGood,GetFoodsByType,GetFoodsByKw,UpdateFood} from '../../api/goods'
class foodUpdate extends Component{
  constructor(props){
    console.log('props',props);
    super()
    //接收到默认的props里面传过来的要修改的数据值赋给state
    this.state=props.updateData

    }
    componentWillReceiveProps(props,state){  // 监听props值修改
      let {_id,name,foodType,price,desc,img} = props.updateData
      
      this.setState({_id,name,foodType,price,desc,img}) //props改变的时候修改数据
    }
    upload=()=>{
        let file = this.refs.file.files[0]
        if(!file) return message.info('请先选择图片',0.6)
        let reader = new FileReader()
        reader.onload=()=>{
          message.success('图片上传成功！',0.3)
            this.setState({img:reader.result})
        }
        reader.readAsDataURL(file)
        console.log(file);
    }
    submit=()=>{
      console.log(this.state.img);
      if(!this.state.img) return message.info('请先上传图片',0.2)
      UpdateFood(this.state)
      .then((res)=>{
        console.log(res);
        message.success('修改成功！',0.2,()=>{
          this.props.closeDrawer() //调用props中的关闭抽屉的方法
        })

        // console.log('p',this.props.getTableData);
        this.props.getTableData(this.props.nowPage,this.props.pageSize)
      })
      .catch(()=>{
        message.error('图片格式不正确！')
      })
    }
  render(){
    let {_id,name,foodType,price,desc,img} = this.state
    // console.log(this);
    return(
     <div className={style.updatediv}>
       <div className={style.left}>
          <p>
            id：<Input type='text' value={_id} disabled></Input>
          </p>
          <p>
            名称：<Input type='text' value={name} onChange={(e)=>{
            let value = e.target.value
            this.setState({name:value})
            }}/>
          </p>
          <p>
            价格：<Input label="Website" type='text' value={price} onChange={(e)=>{
              let value = e.target.value
              this.setState({price:value})
            }}/>
          </p>
          <p>
            类型：<Input type='text' value={foodType} onChange={(e)=>{
              let value = e.target.value
              this.setState({foodType:value})
            }}/>
          </p>
          <p>
            描述：<Input type='text' value={desc} onChange={(e)=>{
              let value = e.target.value
              this.setState({desc:value})
            }}/>
          </p>
          <p>
           图片：<input type='file' ref='file'/>
          </p>
       </div>
       <div className={style.right}>
         缩略图：<div className={style.uImg}><img src={img} alt='' width='80' /></div>
         <div className={style.uHandel}>
           <Button onClick={()=>{this.upload()}}>上传</Button>
           <Button onClick={()=>{this.submit()}} type='primary'>修改</Button>
         </div>
       </div>
     </div>
    )
  }
}

export default foodUpdate