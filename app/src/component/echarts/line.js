import React,{ Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'
class Line extends Component{
constructor(){
  super()
  this.state={
    option:{
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
          type: 'value'
      },
      series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'bar'
      }]
    }
  }
}
  render(){
    let {option} = this.state
    return(
      <Card title='2019年12月第一周销量-柱形图' style={{width:'100%',float:'left',background:'paleturquoise',marginTop:'20px'}}>
        <ReactEcharts option={option} ></ReactEcharts>
      </Card>
    )
  }
}
export default Line