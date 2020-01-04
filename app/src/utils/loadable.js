import React from 'react'
import Loadable from 'react-loadable'
export default (loader)=>{
    function loading(){
        return(
            <div>这里是过度组件</div>
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
