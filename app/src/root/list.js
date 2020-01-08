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
            {
                name:'用户修改',
                id:'2-3',
                path:'/user/userupdate'
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
                path:'/food/foodlist',
            },
            {
                name:'商品添加',
                id:'3-2',
                path:'/food/foodadd'
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