//表头数据
export default
[
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    fixed:'left',
    width:140
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    width:100

  },
  {
    title: '类型',
    dataIndex: 'typeName',
    key: 'type',
    width:100

  },
  {
    title: '图片',
    dataIndex: 'imgPath',
    key: 'img',
    width:200,
    return(data){
      return(
        <img src={'http://localhost:3000'+data}/>
      )
    }
  },
  {
    title: '添加时间',
    dataIndex: 'ctime',
    key: 'ctime',
    width:200

  },
  // {
  //   title: 'Img',
  //   dataIndex: 'img',
  //   key: 'img3',
  //   width:200,
  //   fixed:'right'
  // }
];