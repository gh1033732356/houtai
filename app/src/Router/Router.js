
import React ,{Component} from  'react'
import {HashRouter,Route,Redirect,Switch} from 'react-router-dom'
import loadable from  '../utils/loadable'
const Home = loadable(()=> import("../pages/Home") )
const UserList = loadable(()=> import("../pages/User/UserList") )
const Admin = loadable(()=> import("../pages/Admin") )
const Login = loadable(()=> import("../pages/Login") )
const Editor = loadable(()=> import("../component/Editor") )
const Registerr = loadable(()=> import("../pages/Register") )
const GoodsList = loadable(()=> import("../component/goods/list") )
const GoodsAdd = loadable(()=> import("../component/goods/add") )
const UserAdd = loadable(()=> import("../pages/User/UserAdd") )
const UserUpdate = loadable(()=> import("../pages/User/UserUpdate") )
const PersonalCenter=loadable(()=> import("../component/PersonalCenter") )
const UserCore=loadable(()=> import("../component/UserCore") )
class Router  extends Component{
  render(){
    return(
      <HashRouter>
        {/* 导航 */}
        {/* 路由 */}
        <Switch>
          <Redirect from='/' to='admin/home' exact></Redirect>
          <Route path='/login' component={Login}></Route>
          <Route path='/reg' component={Registerr}></Route>
          <Route path='/admin' render={()=>{
            return(
              <Admin>
                  <Switch>
                    {/* 首页 */}
                    <Route path='/admin/home' component={Home} exact></Route>
                    <Route path='/admin/editor' component={Editor}></Route>
                    {/* 用户相关 */}
                    <Route path='/admin/personalcenter/setup' component={PersonalCenter}></Route>
                    <Route path='/admin/personalcenter/UserCore' component={UserCore}></Route>
                    {/* 商品相关 */}
                    <Route path='/admin/food/foodlist' component={GoodsList} ></Route>
                    <Route path='/admin/food/foodadd' component={GoodsAdd} ></Route>

                    <Route path='/admin/user/userlist' component={UserList} ></Route>
                    <Route path='/admin/user/useradd' component={UserAdd} ></Route>
                    <Route path='/admin/user/userupdate' component={UserUpdate} ></Route>
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