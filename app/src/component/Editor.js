import React from 'react'
import E from 'wangeditor'
import {bindActionCreators} from 'redux'
import ActionCreactor from '../store/actionCreator'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import urlLocationNav from '../utils/urlLocationNav'
class Editor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            editorContent:''
         };
    }
    componentDidMount() {
        // 所在页面信息
        urlLocationNav(this)
        
        // editor 相关代码
        const elemMenu = this.refs.editorElemMenu;
        const elemBody = this.refs.editorElemBody;
        console.log(elemMenu,elemBody)
        const editor = new E(elemMenu,elemBody)
        // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
        editor.customConfig.onchange = html => {
            console.log(editor.txt.html())
            console.log(editor.txt.text())
            this.setState({
                // editorContent: editor.txt.text()
                editorContent: editor.txt.html()
            })
        }
        editor.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.customConfig.uploadImgShowBase64 = true
        editor.create()
    };
    render(){
        return(
        <div>
            <div className="shop">
                <div className="text-area" >
                    <div ref="editorElemMenu"
                        style={{backgroundColor:'#f1f1f1',border:"1px solid #ccc"}}
                        className="editorElem-menu">

                    </div>
                    <div
                        style={{
                            padding:"0 10px",
                            overflowY:"scroll",
                            height:300,
                            border:"1px solid #ccc",
                            borderTop:"none"
                        }}
                        ref="editorElemBody" className="editorElem-body">
                    </div>
                </div>
            </div>
            <button onClick={()=>{
                let txt = this.state.editorContent
                console.log(txt)
            }}>提交</button>
        </div>
    )}
}

export default connect(state=>state,(dispatch)=>{
    return bindActionCreators(ActionCreactor,dispatch)
 })(withRouter(Editor))