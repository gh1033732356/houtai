import React from 'react';
import Hoc from './Hoc/HocAdmin'
import Pie from '../../src/component/echarts/pie'
import Line from '../../src/component/echarts/line'
class Home extends React.Component{
  render(){
    return(
      <div style={{minHeight:555}}>
        <Pie></Pie>
        <Line></Line>
      </div>
    )
  }
}

export default Hoc(Home);