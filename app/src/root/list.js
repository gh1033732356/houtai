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
                path:'/user/list',
            },
            {
                name:'用户添加',
                id:'2-2',
                path:'/user/add'
            },
            {
                name:'用户列表',
                id:'2-3',
                path:'/user/update'
            },
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
            // {
            //     name:'商品修改',
            //     id:'3-3',
            //     path:'/food/food/update'
            // },
        ] 
    },
    {
        name:'设置',
        icon:'mail',
        id:'4',
        path:'/set'
    },
]
export default arr