import React from 'react';
import Hoc from './Hoc/HocAdmin'
class Home extends React.Component{
  render(){
    return(
      <div>home</div>
    )
  }
}

export default Hoc(Home);