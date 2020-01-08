
import React ,{Component} from  'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import loadable from  '../utils/loadable'
const Home = loadable(()=> import("../pages/Home") )
const Admin = loadable(()=> import("../pages/Admin") )
const Login = loadable(()=> import("../pages/Login") )
const Registerr = loadable(()=> import("../pages/Register") )
class Router  extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
          <Redirect from='/' to='admin' exact></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/reg' component={Registerr}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                  <Switch>
                    <Route path='/admin/home' component={Home}></Route>
                    {/* 用户相关 */}
                  </Switch>
              </Admin>
            )
          }}></Route>
        </Switch>

      </HashRouter>
    )
  }
}
export default Router