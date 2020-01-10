import React,{Fragment} from 'react'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import urlLocationNav from '../../utils/urlLocationNav'
export default (Fn)=>{
    class Hocfn extends React.Component{
        componentDidMount(){
            urlLocationNav(this)
        }
        render(){
            return(
                <Fragment>
                    <Fn updateFn={this.props.UpdatePropsRES} userAdds={this.props.Updateres}></Fn>
                </Fragment>
            )
        }
    }
    return connect(state=>state,(dispatch)=>{
        return bindActionCreators(ActionCreactor,dispatch)
     })(withRouter(Hocfn))
}