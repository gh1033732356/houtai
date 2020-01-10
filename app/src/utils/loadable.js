import React from 'react'
import Loadable from 'react-loadable'
import style from '../less/conmon.module.less'
export default (loader)=>{
    function loading(){
        return(
            <div className={style.loadable}>
                <img src='/load2.gif' href='' alt=''/>
            </div>
        )
    }
    const LoadableComponent = Loadable({
        // 需要加载的组件
        loader: loader,
        // 过度的组件
        loading: loading,
    });
    return (props)=>{
      return(
        <LoadableComponent>
            {props.children}
        {/* // 使用路由懒加载， this传递不过去 用props传输 */}
        </LoadableComponent>
      )
    }
}
