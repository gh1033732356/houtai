
import React ,{Component} from  'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import loadable from  '../utils/loadable'
const Home = loadable(()=> import("../pages/Home") )
const UserList = loadable(()=> import("../pages/User/UserList") )
const Admin = loadable(()=> import("../pages/Admin") )
const Login = loadable(()=> import("../pages/Login") )
const UserAdd = loadable(()=> import("../pages/User/UserAdd") )
const UserUpdate = loadable(()=> import("../pages/User/UserUpdate") )
class Router  extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
          <Redirect from='/' to='admin' exact></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                  <Switch>
                    {/* 首页 */}
                    <Route path='/admin/home' component={Home}></Route>
                    {/* 用户相关 */}
                    <Route path='/admin/user/userlist' component={UserList}></Route>
                    <Route path='/admin/user/useradd' component={UserAdd}></Route>
                    <Route path='/admin/user/userupdate' component={UserUpdate}></Route>
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