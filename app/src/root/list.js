const arr = [
    {
        name:'首页',
        icon:'home',
        id:'1',
        path:'/home'
    },
    {
        name:'用户管理',
        icon:'user-add',
        id:'2',
        children:[
            {
                name:'用户列表',
                id:'2-1',
                path:'/user/userlist',
            },
            {
                name:'用户添加',
                id:'2-2',
                path:'/user/useradd'
            },
            // {
            //     name:'用户修改',
            //     id:'2-3',
            //     path:'/user/userupdate'
            // },
        ]
    },
    {
        name:'商品管理',
        icon:'shop',
        id:'3',
        children:[
            {
                name:'商品列表',
                id:'3-1',
                path:'/food/foodlist',
            },
            {
                name:'商品添加',
                id:'3-2',
                path:'/food/foodadd'
            },
        ] 
    },
    {
        name:'用户信息',
        icon:'user',
        id:'4',
        children:[
            {
                name:'个人中心',
                id:'4-1',
                path:'/personalcenter/UserCore',
            },
            {
                name:'个人设置',
                id:'4-2',
                path:'/personalcenter/setup'
            },
        ] 
    },
    {
        name:'富文本编辑器',
        icon:'book',
        id:'5',
        path:'/editor'
    }
]
export default arr