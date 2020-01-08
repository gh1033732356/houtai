const arr = [
    {
        name:'首页',
        icon:'mail',
        id:'1',
        path:'/home'
    },
    {
        name:'用户管理',
        icon:'setting',
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
        icon:'setting',
        id:'3',
        children:[
            {
                name:'商品列表',
                id:'3-1',
                path:'/food/food/list',
            },
            {
                name:'商品添加',
                id:'3-2',
                path:'/food/food/add'
            },
        ] 
    },
    {
        name:'用户信息',
        icon:'setting',
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
    }
    // {
    //     name:'用户信息',
    //     icon:'mail',
    //     id:'4',
    //     children:[
    //         {
    //             name:'个人中心',
    //             id:'4-1',
    //             peth:'/personalcenter/UserCore'
    //         },
    //         {
    //             name:'个人设置',
    //             id:"4-2",
    //             path:'/personalcenter/setup'
    //         }
    //     ]
    // },
]
export default arr