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
          type: 'line'
      }]
    }
  }
}
  render(){
    let {option} = this.state
    return(
      <Card title='热卖商品类型-折线图' style={{width:'48%',float:'right',background:'paleturquoise'}}>
        <ReactEcharts option={option} ></ReactEcharts>
      </Card>
    )
  }
}
export default Line