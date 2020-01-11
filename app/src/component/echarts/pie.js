import React,{ Component } from 'react'
import { Card } from 'antd'
import ReactEcharts from 'echarts-for-react'
class Pie extends Component{
constructor(){
  super()
  this.state={
      option:{
        title: {
            text: '2019年12月用户访问来源',
            subtext: '纯属虚构',
            left: 'right'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                // roseType:'radius', //南丁格尔玫瑰图
                radius: '55%',
                center: ['50%', '60%'],
                data: [
                    {value: 335, name: '直接访问'},
                    {value: 310, name: '邮件营销'},
                    {value: 234, name: '联盟广告'},
                    {value: 135, name: '视频广告'},
                    {value: 148, name: '搜索引擎'}
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
  }
}
  componentDidMount(){
    setTimeout(()=>{
      let data =  [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 300, name: '搜索引擎'}
      ]
      let option = JSON.parse(JSON.stringify(this.state.option))
      option.series[0].data = data  //将上面这个data赋值给原始数据里的option下的data
      this.setState({option:option}) //修改数据
    })
  }
  render(){
    let {option} = this.state
    return(
      <Card title='用户访问量-饼状图' style={{width:'48%',float:'left',background:'papayawhip'}} >
        <ReactEcharts option={option}></ReactEcharts>
      </Card>
    )
  }
}
export default Pie