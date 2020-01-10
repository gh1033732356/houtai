import React from 'react';
import Hoc from './Hoc/HocAdmin'
import Pie from '../../src/component/echarts/pie'
import Line from '../../src/component/echarts/line'
import Area from '../../src/component/echarts/area'
import { Card } from 'antd'

class Home extends React.Component{
  render(){
    return(
      <Card>
        <Pie></Pie>
        <Area></Area>
        <Line></Line>
      </Card>
    )
  }
}

export default Hoc(Home);